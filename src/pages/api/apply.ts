import nodemailer from 'nodemailer';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import ApplicationSubmittedEmail from 'components/email/ApplicationSubmittedEmail';
import applicationSchema from 'utils/applicationFormSchema';
import ApplicationConfirmationEmail from '../../components/email/ApplicationConfirmationEmail';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Revalidate what was submitted
      let application = await applicationSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      console.log(JSON.stringify(application, null, 3));
      let logoPath = 'email-header@shillcares.org';

      // Send an email to the foundation
      let status = await transporter.sendMail({
        from: process.env.APPLICATION_FROM,
        to: process.env.APPLICATION_TO,
        subject: 'Shill Cares Grant Application',
        html: ReactDOMServer.renderToString(
          React.createElement(ApplicationSubmittedEmail, {
            application,
            logoPath: `cid:${logoPath}`,
            submitted: new Date().toLocaleDateString(),
          }),
        ),
        attachments: [
          {
            filename: 'email-header.png',
            path: `${process.cwd()}/public/email-header.png`,
            cid: logoPath,
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
        from: process.env.APPLICATION_FROM,
        to: application.contactEmail || application.directorEmail,
        subject: 'Molly & Ed Shill Cares - Grant Application Received',
        html: ReactDOMServer.renderToString(
          React.createElement(ApplicationConfirmationEmail, {
            application,
            logoPath: `cid:${logoPath}`,
            submitted: new Date().toLocaleDateString(),
          }),
        ),
        attachments: [
          {
            filename: 'email-header.png',
            path: `${process.cwd()}/public/email-header.png`,
            cid: logoPath,
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
      res.status(500).send({ message: 'Error Submitting Application' });
    }
  } else {
    res.status(405).send({ message: `Invalid Method: ${req.method}` });
  }
};

export default handler;
