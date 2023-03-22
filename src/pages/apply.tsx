import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import ApplyForm from 'components/forms/ApplyForm';

const Apply: NextPage = () => {
  return (
    <Main>
      <Container>
        <Typography variant={'h1'}>Grant Application</Typography>
        <Typography variant="subtitle1" sx={{ mt: 3, mb: 6 }} paragraph>
          The Molly and Ed Shill Cares Foundation funds organizations that
          provide food, shelter, reduce violence and provide opportunities for
          success in New York&apos;s Monroe and Ontario counties. If your
          organization aligns with this mission, please complete this form and
          provide details on your request.
        </Typography>
        <ApplyForm />
      </Container>
    </Main>
  );
};

export default Apply;
