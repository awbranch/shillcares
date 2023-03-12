import nodemailer from 'nodemailer';
import { sleep } from 'utils/utils';
import contactFormSchema from 'utils/contactFormSchema';

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
      let application = await contactFormSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      // Check the honeypot it must be blank
      if (application.accounting.length !== 0) {
        res.status(500).send({ message: 'Invalid Message' });
        return;
      }

      await sleep(2);

      // TODO

      res.status(200).json({ message: 'Message Sent Successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: error.message });
    }
  } else {
    res.status(405).send({ message: `Invalid Method: ${req.method}` });
  }
};

export default handler;
