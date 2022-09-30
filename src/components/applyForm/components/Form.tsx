import React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NextLink from 'next/link';
import applicationSchema from 'utils/applicationFormSchema';

interface Props {
  application?: GrantApplication;
  onSubmit: (GrantApplication) => Promise<void>;
}

const Form = ({ application, onSubmit }: Props): JSX.Element => {
  const initialValues = application || {
    organization: '',
    website: '',
    founded: '',
    budget: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    directorName: '',
    directorEmail: '',
    directorPhone: '',
    contactName: '',
    contactTitle: '',
    contactEmail: '',
    contactPhone: '',
    projectName: '',
    projectGoals: '',
    projectRequestedAmount: '',
    projectTotalCost: '',
    projectDates: '',
    projectArea: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: applicationSchema,
    onSubmit: async (values) => {
      await onSubmit(values as GrantApplication);
    },
  });

  return (
    <Box marginBottom={4}>
      <Typography variant={'h1'}>Grant Application</Typography>
      <Typography sx={{ marginBottom: 4 }} color="text.secondary" paragraph>
        The Molly and Ed Shill Cares Foundation funds organizations that provide
        food, shelter, reduce violence and provide opportunities for success in
        New York&apos;s Monroe and Ontario counties. If your organization aligns
        with this mission, please complete this form and provide details on your
        request.
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'h2'} sx={{ marginBottom: 2 }}>
              Organization
            </Typography>
            <TextField
              sx={{ height: 54 }}
              label="Legal name as supplied on IRS form 990 *"
              name="organization"
              fullWidth
              {...getFieldProps('organization', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ height: 54 }}
              label="Website"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('website', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Year founded *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('founded', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Annual operating budget *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('budget', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ height: 54 }}
              label="Street address line 1 *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('address1', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ height: 54 }}
              label="Street address line 2"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('address2', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              sx={{ height: 54 }}
              label="City *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('city', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              sx={{ height: 54 }}
              label="State *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('state', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              sx={{ height: 54 }}
              label="Zip / Postal Code *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('zip', formik)}
            />
          </Grid>
        </Grid>

        <Box paddingTop={6} paddingBottom={4}>
          <Divider />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'h2'} sx={{ marginBottom: 0.25 }}>
              Leadership
            </Typography>
            <Typography
              variant={'body2'}
              color="text.secondary"
              sx={{ marginBottom: 2 }}
            >
              The executive director of the organization
            </Typography>
            <TextField
              sx={{ height: 54 }}
              label="Name *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('directorName', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Email *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('directorEmail', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Phone *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('directorPhone', formik)}
            />
          </Grid>
        </Grid>

        <Box paddingTop={6} paddingBottom={4}>
          <Divider />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'h2'} sx={{ marginBottom: 0.25 }}>
              Contact
            </Typography>
            <Typography
              variant={'body2'}
              color="text.secondary"
              sx={{ marginBottom: 2 }}
            >
              If different from the executive director
            </Typography>
            <TextField
              sx={{ height: 54 }}
              label="Name"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('contactName', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ height: 54 }}
              label="Title"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('contactTitle', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Email"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('contactEmail', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Phone"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('contactPhone', formik)}
            />
          </Grid>
        </Grid>

        <Box paddingTop={6} paddingBottom={4}>
          <Divider />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant={'h2'} sx={{ marginBottom: 0.25 }}>
              Project
            </Typography>
            <Typography
              variant={'body2'}
              color="text.secondary"
              sx={{ marginBottom: 2 }}
            >
              Details about the project to be granted
            </Typography>

            <TextField
              sx={{ height: 54 }}
              label="Project name *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('projectName', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Project goals *"
              multiline
              rows={10}
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('projectGoals', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Requested amount *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('projectRequestedAmount', formik)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              sx={{ height: 54 }}
              label="Total project cost *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('projectTotalCost', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ height: 54 }}
              label="Project start and end dates *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('projectDates', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Geographic areas to be served *"
              multiline
              rows={3}
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('projectArea', formik)}
            />
          </Grid>
          <Grid item container justifyContent={'left'} xs={12}>
            <Box>
              <Typography component="p" variant="body2" align="center">
                By clicking on &quot;submit&quot; you certify to the best of
                your knowledge, the tax-exempt status of this Organization is
                still in effect. If a grant is awarded to this Organization, the
                proceeds of that grant will not be distributed to or used to
                benefit any organization or individual supporting or engaged in
                terrorism, or used for any other unlawful purpose.
              </Typography>
            </Box>
          </Grid>
          <Grid item container justifyContent={'center'} xs={12}>
            <Stack direction="row" spacing={2}>
              <Button
                sx={{ height: 54, minWidth: 150 }}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
              >
                Apply
              </Button>
              <NextLink href="/" passHref>
                <Button
                  sx={{ height: 54, minWidth: 150 }}
                  component={'a'}
                  variant="outlined"
                  color="primary"
                  size="large"
                >
                  Cancel
                </Button>
              </NextLink>
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

export default Form;
