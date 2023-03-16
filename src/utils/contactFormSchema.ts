import * as yup from 'yup';

const required = 'Required';
const invalidEmail = 'Please enter a valid email address';

const contactInfoSchema = yup.object({
  accounting: yup.string(),
  name: yup.string().trim().required(required),
  email: yup.string().trim().required(required).email(invalidEmail),
  message: yup.string().trim().required(required),
});

export default contactInfoSchema;
