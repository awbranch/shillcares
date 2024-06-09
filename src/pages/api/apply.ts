import React from 'react';
import ApplicationSubmittedEmail from 'components/email/ApplicationSubmittedEmail';
import ApplicationConfirmationEmail from 'components/email/ApplicationConfirmationEmail';
import applicationSchema from 'utils/applicationFormSchema';
import { Resend } from 'resend';
import twilio from 'twilio';
import { truncateTo } from 'utils/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

const smsClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
);

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Revalidate what was submitted
      let application = await applicationSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      // Check the honeypot it must be blank
      if (application.accounting.length !== 0) {
        res.status(500).send({ message: 'Invalid Application' });
        return;
      }

      console.log(JSON.stringify(application, null, 3));

      // Send an email to the foundation
      let status = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Shill Cares Grant Application',
        react: React.createElement(ApplicationSubmittedEmail, {
          application,
          submitted: new Date().toLocaleDateString(),
        }),
      });

      if (status.error) {
        console.error('Resend Error Sending to Foundation', status.error);
        throw new Error(status.error?.message);
      }

      // Send SMS text messages to the foundation
      const numbers = process.env.TWILIO_TO_PHONE.split(/\s*,\s*/);

      // Ensure the message is less than 1600 chars
      const smsMessage = `ShillCares Grant Application Received\n${truncateTo(
        application.organization,
        100,
        true,
      )} asking for ${truncateTo(
        application.projectRequestedAmount,
        50,
        true,
      )} for "${truncateTo(
        application.projectName,
        100,
        true,
      )}"\nCheck email for full application details.`;
      for (let number of numbers) {
        const smsResponse = await smsClient.messages.create({
          body: truncateTo(smsMessage, 1600),
          from: process.env.TWILIO_FROM_PHONE,
          to: number,
        });

        console.log(`Twilio Response to ${number}: ${smsResponse.sid}`);
        console.debug(
          `Twilio Response Details\n${JSON.stringify(smsResponse, null, 3)}`,
        );
      }

      // Send confirmation email to the submitter
      const toList: string[] = [];
      if (application.contactEmail) {
        toList.push(application.contactEmail);
      }
      if (application.directorEmail) {
        toList.push(application.directorEmail);
      }

      status = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: toList,
        subject: 'Molly & Ed Shill Cares - Grant Application Received',
        react: React.createElement(ApplicationConfirmationEmail, {
          application,
          submitted: new Date().toLocaleDateString(),
        }),
      });

      if (status.error) {
        console.error('Resend Error Sending to Submitter', status.error);
        throw new Error(status.error?.message);
      }

      res.status(200).json({ message: 'Application Submitted Successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'System Error' });
    }
  } else {
    res.status(405).send({ message: `Invalid Method: ${req.method}` });
  }
};

export default handler;
