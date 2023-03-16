import React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import contactInfoSchema from 'utils/contactFormSchema';
import useFormController from './components/useFormController';
import FormWrapper from './components/FormWrapper';
import globals from 'utils/globals';

interface ContactFormProps {
  contactInfo?: ContactInfo;
}

const ContactForm = ({ contactInfo }: ContactFormProps): JSX.Element => {
  const { onSubmit, onRestart, status } = useFormController('api/contact');

  const initialValues = contactInfo || {
    accounting: '',
    name: '',
    email: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactInfoSchema,
    onSubmit: async (values, { resetForm }) => {
      await onSubmit(values, () => resetForm());
    },
  });

  return (
    <FormWrapper
      status={status}
      onClose={onRestart}
      successMessage={globals.MESSAGE_RECEIVED}
    >
      <form onSubmit={formik.handleSubmit}>
        {/* This is a honeypot field to catch bots. If text gets entered here, something is wrong */}
        <Box sx={{ position: 'fixed', top: 3000 }}>
          <TextField
            label="Accounting *"
            {...getFieldProps('accounting', formik)}
          />
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('name', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('email', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="SuccessMessage *"
              multiline
              rows={10}
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('message', formik)}
            />
          </Grid>

          <Grid item container justifyContent={'center'} xs={12}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </FormWrapper>
  );
};

const getFieldProps = (name: string, formik: any) => {
  return {
    id: name,
    name: name,
    value: formik.values[name],
    onChange: formik.handleChange,
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] && formik.errors[name],
  };
};

export default ContactForm;
