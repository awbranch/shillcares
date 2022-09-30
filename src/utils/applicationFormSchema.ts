import * as yup from 'yup';

const required = 'Required';
const invalidEmail = 'Please enter a valid email address';

const applicationSchema = yup.object({
  accounting: yup.string(),
  organization: yup.string().trim().required(required),
  website: yup.string().trim(),
  founded: yup
    .string()
    .trim()
    .min(4, 'Please enter a valid year')
    .max(4, 'Please enter a valid year')
    .required(required),
  budget: yup.string().trim().required(required),

  address1: yup.string().trim().required(required),
  address2: yup.string().trim(),
  city: yup.string().trim().required(required),
  state: yup.string().trim().required(required),
  zip: yup.string().trim().required(required),

  directorName: yup.string().trim().required(required),
  directorEmail: yup.string().trim().email(invalidEmail).required(required),
  directorPhone: yup.string().trim().required(required),

  contactName: yup.string().trim(),
  contactTitle: yup.string().trim(),
  contactEmail: yup.string().trim().email(invalidEmail),
  contactPhone: yup.string().trim(),

  projectName: yup.string().trim().required(required),
  projectRequestedAmount: yup.string().trim().required(required),
  projectTotalCost: yup.string().trim().required(required),
  projectDates: yup.string().trim().required(required),
  projectArea: yup.string().trim().required(required),
  projectGoals: yup.string().trim().required(required),
});

export default applicationSchema;
