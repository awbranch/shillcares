import React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import contactInfoSchema from 'utils/contactFormSchema';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  contactInfo: ContactInfo;
  onSubmit: (GrantApplication) => Promise<void>;
}

const ContactFormComponent = ({
  contactInfo,
  onSubmit,
}: Props): JSX.Element => {
  const initialValues = contactInfo || {
    accounting: '',
    name: '',
    email: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactInfoSchema,
    onSubmit: async (values) => {
      await onSubmit(values as ContactInfo);
    },
  });

  return (
    <Box marginBottom={4}>
      <Typography variant={'h1'}>Contact Us</Typography>
      <Typography variant="subtitle1" sx={{ mt: 3, mb: 6 }} paragraph>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit, sed quia non numquam eius modi tempora
        incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
      </Typography>
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
              label="Message *"
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
    </Box>
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

export default ContactFormComponent;
