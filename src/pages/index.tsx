import type { NextPage } from 'next';
import NextLink from 'next/link';
import Main from 'layouts/main/Main';
import Container from 'components/Container';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Home: NextPage = () => {
  return (
    <Main>
      <Container>
        <Typography variant="subtitle1">
          The mission of the Molly and Ed Shill Cares Foundation is to help all
          people and animals have a safe place to live and grow. We aim to end
          the cycle of violence and provide opportunities for success within our
          communities.
        </Typography>
        <Box>
          <Box
            component={'img'}
            alt={'Mother, daughter and pet dog looking out the front door.'}
            src={'/home.jpg'}
            sx={{ mt: 4, width: '100%' }}
          />
        </Box>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="subtitle1">
            {`We are currently accepting grant applications for ${new Date().getFullYear()}`}
            .
          </Typography>
          <NextLink href="/apply" passHref>
            <Button
              sx={{ mt: 5, height: 54, minWidth: 200 }}
              component={'a'}
              variant="contained"
              color="primary"
              size="large"
            >
              Apply for Grant
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Main>
  );
};

export default Home;
