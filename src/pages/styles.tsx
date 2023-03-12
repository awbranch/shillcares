import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React from 'react';
import Stack from '@mui/material/Stack';
import getTheme from 'theme';

const Home: NextPage = () => {
  const theme = getTheme();
  console.log(theme);
  return (
    <Main>
      <Container>
        <Stack spacing={2}>
          <Typography variant="h1">Header 1</Typography>
          <Typography variant="h2">Header 2</Typography>
          <Typography variant="h3">Header 3</Typography>
          <Typography variant="h4">Header 4 - Nav Bar</Typography>
          <Typography variant="subtitle1">Subtitle 1</Typography>
          <Typography variant="subtitle2">Subtitle 2</Typography>
          <Typography variant="body1">body1</Typography>
          <Typography variant="body2">body2</Typography>
          <Typography variant="caption">caption</Typography>

          <Link>Hyperlink</Link>
        </Stack>
      </Container>
    </Main>
  );
};

export default Home;
