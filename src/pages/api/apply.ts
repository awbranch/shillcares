import nodemailer from 'nodemailer';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import ApplicationSubmittedEmail from 'components/email/ApplicationSubmittedEmail';
import ApplicationConfirmationEmail from 'components/email/ApplicationConfirmationEmail';
import applicationSchema from 'utils/applicationFormSchema';
import path from 'path';
import twilio from 'twilio';
import { truncateTo } from 'utils/utils';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: true,
  debug: true,
});

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
      let logoId = 'email-header@shillcares.org';
      let logoPath = path.resolve('./public');

      // Send an email to the foundation
      let status = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Shill Cares Grant Application',
        html: ReactDOMServer.renderToString(
          React.createElement(ApplicationSubmittedEmail, {
            application,
            logoPath: `cid:${logoId}`,
            submitted: new Date().toLocaleDateString(),
          }),
        ),
        attachments: [
          {
            filename: 'email-header.png',
            path: `${logoPath}/email-header.png`,
            cid: logoId,
          },
        ],
      });

      console.log(
        `Application submitted email response: ${status.response} id: ${
          status.messageId
        } accepted: ${JSON.stringify(
          status.accepted,
        )} rejected: ${JSON.stringify(status.rejected)}`,
      );

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

        console.log(`Twilio Response: ${smsResponse.sid}`);
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

      status = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: toList.join(','),
        subject: 'Molly & Ed Shill Cares - Grant Application Received',
        html: ReactDOMServer.renderToString(
          React.createElement(ApplicationConfirmationEmail, {
            application,
            logoPath: `cid:${logoId}`,
            submitted: new Date().toLocaleDateString(),
          }),
        ),
        attachments: [
          {
            filename: 'email-header.png',
            path: `${logoPath}/email-header.png`,
            cid: logoId,
          },
        ],
      });

      console.log(
        `Application confirmation email response: ${status.response} id: ${
          status.messageId
        } accepted: ${JSON.stringify(
          status.accepted,
        )} rejected: ${JSON.stringify(status.rejected)}`,
      );

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
