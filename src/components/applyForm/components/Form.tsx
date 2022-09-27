import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

const required = 'Required';
const invalidEmail = 'Please enter a valid email address';

const validationSchema = yup.object({
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

interface Props {
  testMode: boolean;
  onSubmit: (GrantApplication) => Promise<void>;
}

const Form = ({ testMode, onSubmit }: Props): JSX.Element => {
  const initialValues: GrantApplication = testMode
    ? {
        organization: 'Some Non Profit',
        website: 'https://www.nonprofit.org',
        founded: '1999',
        budget: '$2,000,000',
        address1: '123 Main Street',
        address2: '',
        city: 'Anytown',
        state: 'NY',
        zip: '12345',
        directorName: 'Jane Doe',
        directorEmail: 'jane.doe@organization.org',
        directorPhone: '(555) 555-5555',
        contactName: 'John Doe',
        contactTitle: 'CTO',
        contactEmail: 'john.doe@organization.org',
        contactPhone: '(444) 444-4444',
        projectName: 'Dog Spa',
        projectGoals: 'To make a spa for dogs',
        projectRequestedAmount: '$20,000',
        projectTotalCost: '$50,000',
        projectDates: '10/1/2022 to 10/1/2023',
        projectArea: 'Monroe County',
      }
    : {
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
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await onSubmit(values as GrantApplication);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant={'h2'} sx={{ marginBottom: 2 }}>
            Organization
          </Typography>
          <TextField
            sx={{ height: 54 }}
            label="Legal name as supplied on IRS form 990 *"
            variant="outlined"
            color="primary"
            size="medium"
            name="organization"
            fullWidth
            value={formik.values.organization}
            onChange={formik.handleChange}
            error={
              formik.touched.organization && Boolean(formik.errors.organization)
            }
            // @ts-ignore
            helperText={
              formik.touched.organization && formik.errors.organization
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ height: 54 }}
            label="Website"
            variant="outlined"
            color="primary"
            size="medium"
            name="website"
            fullWidth
            value={formik.values.website}
            onChange={formik.handleChange}
            error={formik.touched.website && Boolean(formik.errors.website)}
            // @ts-ignore
            helperText={formik.touched.website && formik.errors.website}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ height: 54 }}
            label="Year founded *"
            variant="outlined"
            color="primary"
            size="medium"
            name="founded"
            fullWidth
            value={formik.values.founded}
            onChange={formik.handleChange}
            error={formik.touched.founded && Boolean(formik.errors.founded)}
            // @ts-ignore
            helperText={formik.touched.founded && formik.errors.founded}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ height: 54 }}
            label="Annual operating budget *"
            variant="outlined"
            color="primary"
            size="medium"
            name="budget"
            fullWidth
            value={formik.values.budget}
            onChange={formik.handleChange}
            error={formik.touched.budget && Boolean(formik.errors.budget)}
            // @ts-ignore
            helperText={formik.touched.budget && formik.errors.budget}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ height: 54 }}
            label="Street address line 1 *"
            variant="outlined"
            color="primary"
            size="medium"
            name="address1"
            fullWidth
            value={formik.values.address1}
            onChange={formik.handleChange}
            error={formik.touched.address1 && Boolean(formik.errors.address1)}
            // @ts-ignore
            helperText={formik.touched.address1 && formik.errors.address1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ height: 54 }}
            label="Street address line 2"
            variant="outlined"
            color="primary"
            size="medium"
            name="address2"
            fullWidth
            value={formik.values.address2}
            onChange={formik.handleChange}
            error={formik.touched.address2 && Boolean(formik.errors.address2)}
            // @ts-ignore
            helperText={formik.touched.address2 && formik.errors.address2}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            sx={{ height: 54 }}
            label="City *"
            variant="outlined"
            color="primary"
            size="medium"
            name="city"
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            // @ts-ignore
            helperText={formik.touched.city && formik.errors.city}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            sx={{ height: 54 }}
            label="State *"
            variant="outlined"
            color="primary"
            size="medium"
            name="state"
            fullWidth
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            // @ts-ignore
            helperText={formik.touched.state && formik.errors.state}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            sx={{ height: 54 }}
            label="Zip / Postal Code *"
            variant="outlined"
            color="primary"
            size="medium"
            name="zip"
            fullWidth
            value={formik.values.zip}
            onChange={formik.handleChange}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            // @ts-ignore
            helperText={formik.touched.zip && formik.errors.zip}
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
            name="directorName"
            fullWidth
            value={formik.values.directorName}
            onChange={formik.handleChange}
            error={
              formik.touched.directorName && Boolean(formik.errors.directorName)
            }
            // @ts-ignore
            helperText={
              formik.touched.directorName && formik.errors.directorName
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ height: 54 }}
            label="Email *"
            variant="outlined"
            color="primary"
            size="medium"
            name="directorEmail"
            fullWidth
            value={formik.values.directorEmail}
            onChange={formik.handleChange}
            error={
              formik.touched.directorEmail &&
              Boolean(formik.errors.directorEmail)
            }
            // @ts-ignore
            helperText={
              formik.touched.directorEmail && formik.errors.directorEmail
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ height: 54 }}
            label="Phone *"
            variant="outlined"
            color="primary"
            size="medium"
            name="directorPhone"
            fullWidth
            value={formik.values.directorPhone}
            onChange={formik.handleChange}
            error={
              formik.touched.directorPhone &&
              Boolean(formik.errors.directorPhone)
            }
            // @ts-ignore
            helperText={
              formik.touched.directorPhone && formik.errors.directorPhone
            }
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
            name="contactName"
            fullWidth
            value={formik.values.contactName}
            onChange={formik.handleChange}
            error={
              formik.touched.contactName && Boolean(formik.errors.contactName)
            }
            // @ts-ignore
            helperText={formik.touched.contactName && formik.errors.contactName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ height: 54 }}
            label="Title"
            variant="outlined"
            color="primary"
            size="medium"
            name="contactTitle"
            fullWidth
            value={formik.values.contactTitle}
            onChange={formik.handleChange}
            error={
              formik.touched.contactTitle && Boolean(formik.errors.contactTitle)
            }
            // @ts-ignore
            helperText={
              formik.touched.contactTitle && formik.errors.contactTitle
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ height: 54 }}
            label="Email"
            variant="outlined"
            color="primary"
            size="medium"
            name="contactEmail"
            fullWidth
            value={formik.values.contactEmail}
            onChange={formik.handleChange}
            error={
              formik.touched.contactEmail && Boolean(formik.errors.contactEmail)
            }
            // @ts-ignore
            helperText={
              formik.touched.contactEmail && formik.errors.contactEmail
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ height: 54 }}
            label="Phone"
            variant="outlined"
            color="primary"
            size="medium"
            name="contactPhone"
            fullWidth
            value={formik.values.contactPhone}
            onChange={formik.handleChange}
            error={
              formik.touched.contactPhone && Boolean(formik.errors.contactPhone)
            }
            // @ts-ignore
            helperText={
              formik.touched.contactPhone && formik.errors.contactPhone
            }
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
            name="projectName"
            fullWidth
            value={formik.values.projectName}
            onChange={formik.handleChange}
            error={
              formik.touched.projectName && Boolean(formik.errors.projectName)
            }
            // @ts-ignore
            helperText={formik.touched.projectName && formik.errors.projectName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Project goals *"
            multiline
            rows={6}
            variant="outlined"
            color="primary"
            size="medium"
            name="projectGoals"
            fullWidth
            value={formik.values.projectGoals}
            onChange={formik.handleChange}
            error={
              formik.touched.projectGoals && Boolean(formik.errors.projectGoals)
            }
            // @ts-ignore
            helperText={
              formik.touched.projectGoals && formik.errors.projectGoals
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ height: 54 }}
            label="Requested amount *"
            variant="outlined"
            color="primary"
            size="medium"
            name="projectRequestedAmount"
            fullWidth
            value={formik.values.projectRequestedAmount}
            onChange={formik.handleChange}
            error={
              formik.touched.projectRequestedAmount &&
              Boolean(formik.errors.projectRequestedAmount)
            }
            // @ts-ignore
            helperText={
              formik.touched.projectRequestedAmount &&
              formik.errors.projectRequestedAmount
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            sx={{ height: 54 }}
            label="Total project cost *"
            variant="outlined"
            color="primary"
            size="medium"
            name="projectTotalCost"
            fullWidth
            value={formik.values.projectTotalCost}
            onChange={formik.handleChange}
            error={
              formik.touched.projectTotalCost &&
              Boolean(formik.errors.projectTotalCost)
            }
            // @ts-ignore
            helperText={
              formik.touched.projectTotalCost && formik.errors.projectTotalCost
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ height: 54 }}
            label="Project start and end dates *"
            variant="outlined"
            color="primary"
            size="medium"
            name="projectDates"
            fullWidth
            value={formik.values.projectDates}
            onChange={formik.handleChange}
            error={
              formik.touched.projectDates && Boolean(formik.errors.projectDates)
            }
            // @ts-ignore
            helperText={
              formik.touched.projectDates && formik.errors.projectDates
            }
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
            name="projectArea"
            fullWidth
            value={formik.values.projectArea}
            onChange={formik.handleChange}
            error={
              formik.touched.projectArea && Boolean(formik.errors.projectArea)
            }
            // @ts-ignore
            helperText={formik.touched.projectArea && formik.errors.projectArea}
          />
        </Grid>
        <Grid item container justifyContent={'left'} xs={12}>
          <Box>
            <Typography component="p" variant="body2" align="center">
              By clicking on &quot;submit&quot; you certify to the best of your
              knowledge, the tax-exempt status of this Organization is still in
              effect. If a grant is awarded to this Organization, the proceeds
              of that grant will not be distributed to or used to benefit any
              organization or individual supporting or engaged in terrorism, or
              used for any other unlawful purpose.
            </Typography>
          </Box>
        </Grid>
        <Grid item container justifyContent={'center'} xs={12}>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{ height: 54, minWidth: 150 }}
              variant="contained"
              color="primary"
              size="medium"
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
                size="medium"
                href={'/'}
              >
                Cancel
              </Button>
            </NextLink>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
