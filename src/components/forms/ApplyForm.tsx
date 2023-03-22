import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import applicationSchema from 'utils/applicationFormSchema';
import useFormController from './components/useFormController';
import FormWrapper from './components/FormWrapper';
import globals from 'utils/globals';

const ApplyForm = (): JSX.Element => {
  const { onSubmit, onRestart, status } = useFormController('api/apply');

  const initialValues = {
    accounting: '',
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
    onSubmit: async (values, { resetForm }) => {
      await onSubmit(values, () => resetForm());
    },
  });

  return (
    <FormWrapper
      status={status}
      onClose={onRestart}
      successMessage={globals.APPLICATION_RECEIVED}
    >
      <form onSubmit={formik.handleSubmit}>
        {/* This is a honeypot field to catch bots. If text gets enetered here, something is wrong */}
        <Box sx={{ position: 'fixed', top: 3000 }}>
          <TextField
            label="Accounting *"
            {...getFieldProps('accounting', formik)}
          />
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant={'h2'} sx={{ marginBottom: 2 }}>
              Organization
            </Typography>
            <TextField
              label="Legal name as supplied on IRS form 990 *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('organization', formik)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
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
              label="Zip / Postal Code *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('zip', formik)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant={'h2'} sx={{ pt: 10, pb: 3 }}>
              Leadership
            </Typography>
            <Typography variant={'body2'} paragraph>
              The executive director of the organization
            </Typography>
            <TextField
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
              label="Phone *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('directorPhone', formik)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant={'h2'} sx={{ pt: 10, pb: 3 }}>
              Contact
            </Typography>
            <Typography variant={'body2'} paragraph>
              If different from the executive director
            </Typography>
            <TextField
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
              label="Phone"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('contactPhone', formik)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant={'h2'} sx={{ pt: 10, pb: 3 }}>
              Project
            </Typography>
            <Typography variant={'body2'} paragraph>
              Details about the project to be granted
            </Typography>

            <TextField
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
              <Typography variant="body2" paragraph>
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

export default ApplyForm;
