import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

const Env: NextPage = () => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">Environment</Typography>

        <Typography variant="body1" sx={{ mt: 3 }} paragraph>
          NODE_ENV={process.env.NODE_ENV}
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }} paragraph>
          VERCEL_ENV={process.env.VERCEL_ENV}
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }} paragraph>
          VERCEL_URL={process.env.VERCEL_URL}
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }} paragraph>
          VERCEL_GIT_REPO_SLUG={process.env.VERCEL_GIT_REPO_SLUG}
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }} paragraph>
          NEXT_PUBLIC_VERCEL_ENV={process.env.NEXT_PUBLIC_VERCEL_ENV}
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }} paragraph>
          NEXT_PUBLIC_VERCEL_URL={process.env.NEXT_PUBLIC_VERCEL_URL}
        </Typography>
      </Container>
    </Main>
  );
};

export default Env;
