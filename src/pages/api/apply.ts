import nodemailer from 'nodemailer';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import ApplicationSubmittedEmail from 'components/email/ApplicationSubmittedEmail';

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
      let application = req.body as GrantApplication;

      let status = await transporter.sendMail({
        from: process.env.APPLICATION_FROM,
        to: process.env.APPLICATION_TO,
        subject: 'Shill Cares Grant Application',
        html: ReactDOMServer.renderToString(
          React.createElement(ApplicationSubmittedEmail, { application }),
        ),
      });

      console.log(
        `Application email response: ${status.response} id: ${
          status.messageId
        } accepted: ${JSON.stringify(
          status.accepted,
        )} rejected: ${JSON.stringify(status.rejected)}`,
      );

      console.log(JSON.stringify(req.body, null, 3));

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
