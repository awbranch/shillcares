import nodemailer from 'nodemailer';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import MessageSubmittedEmail from 'components/email/MessageSubmittedEmail';
import MessageConfirmationEmail from 'components/email/MessageConfirmationEmail';
import contactFormSchema from 'utils/contactFormSchema';
import path from 'path';
import twilio from 'twilio';

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
      let logoId = 'email-header@shillcares.org';
      let logoPath = path.resolve('./public');

      // Send an email to the foundation
      let status = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Shill Cares Contact Us Message',
        html: ReactDOMServer.renderToString(
          React.createElement(MessageSubmittedEmail, {
            contactInfo,
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
        `Message submitted email response: ${status.response} id: ${
          status.messageId
        } accepted: ${JSON.stringify(
          status.accepted,
        )} rejected: ${JSON.stringify(status.rejected)}`,
      );

      // Send SMS text messages to the foundation
      const numbers = process.env.TWILIO_TO_PHONE.split(/\s*,\s*/);
      for (let number of numbers) {
        const smsResponse = await smsClient.messages.create({
          body: `ShillCares Message Received\nFrom: ${contactInfo.name} - ${contactInfo.email}\n${contactInfo.message}`,
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
      status = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: contactInfo.email,
        subject: 'Molly & Ed Shill Cares - Message Received',
        html: ReactDOMServer.renderToString(
          React.createElement(MessageConfirmationEmail, {
            contactInfo,
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
        `Message confirmation email response: ${status.response} id: ${
          status.messageId
        } accepted: ${JSON.stringify(
          status.accepted,
        )} rejected: ${JSON.stringify(status.rejected)}`,
      );

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
