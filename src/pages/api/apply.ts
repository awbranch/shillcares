import nodemailer from 'nodemailer';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import ApplicationSubmittedEmail from 'components/email/ApplicationSubmittedEmail';
import ApplicationConfirmationEmail from 'components/email/ApplicationConfirmationEmail';
import applicationSchema from 'utils/applicationFormSchema';
import path from 'path';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  logger: true,
  debug: true,
});

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

      // Send confirmation email to the submitter
      status = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: application.contactEmail || application.directorEmail,
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
