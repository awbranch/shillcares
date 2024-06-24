import React from 'react';
import MessageSubmittedEmail from 'components/email/MessageSubmittedEmail';
import MessageConfirmationEmail from 'components/email/MessageConfirmationEmail';
import contactFormSchema from 'utils/contactFormSchema';
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
      let contactInfo = await contactFormSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      // Check the honeypot it must be blank
      if (contactInfo.accounting.length !== 0) {
        res.status(500).send({ message: 'Invalid Message' });
        return;
      }

      console.log(JSON.stringify(contactInfo, null, 3));

      // Send an email to the foundation
      let status = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO.split(','),
        subject: 'Shill Cares Contact Us Message',
        react: React.createElement(MessageSubmittedEmail, {
          contactInfo,
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
      const smsMessage = `ShillCares Message Received\nFrom: ${truncateTo(
        contactInfo.name,
        100,
        true,
      )} - ${truncateTo(contactInfo.email, 100, true)}\n${truncateTo(
        contactInfo.message,
        250,
        true,
      )}`;

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
      status = await resend.emails.send({
        from: process.env.EMAIL_FROM,
        to: contactInfo.email,
        subject: 'Molly & Ed Shill Cares - Message Received',
        react: React.createElement(MessageConfirmationEmail, {
          contactInfo,
          submitted: new Date().toLocaleDateString(),
        }),
      });

      if (status.error) {
        console.error('Resend Error Sending to Submitter', status.error);
        throw new Error(status.error?.message);
      }
      res.status(200).json({ message: 'Message Sent Successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'System Error' });
    }
  } else {
    res.status(405).send({ message: `Invalid Method: ${req.method}` });
  }
};

export default handler;
