import { useEffect } from 'react';
import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import ApplyForm from 'components/forms/ApplyForm';
import path from 'path';
import { promises as fs } from 'fs';

interface Props {
  application?: GrantApplication;
}

const windowLoaded = () => {
  console.log('Apply - Window Loaded');
};

const Apply: NextPage = ({ application }: Props) => {
  useEffect(() => {
    console.log('Apply - Adding window listener');
    window.addEventListener('load', windowLoaded);
    return () => {
      console.log('Apply - Removing window listener');
      window.removeEventListener('load', windowLoaded);
    };
  }, []);

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
        <ApplyForm application={application} />
      </Container>
    </Main>
  );
};

export async function getServerSideProps() {
  let application = null;
  if (process.env.FLAG_POPULATE_APPLY_FORM === 'true') {
    const file = path.join(process.cwd(), 'data', 'testApplication.json');
    application = JSON.parse(await fs.readFile(file, 'utf8'));
  }

  return {
    props: { application },
  };
}

export default Apply;
