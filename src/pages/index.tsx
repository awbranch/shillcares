import type { NextPage } from 'next';
import Container from 'components/Container';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home: NextPage = () => {
  return (
    <Container>
      <Box title="Shill Cares Foundation" sx={{ textAlign: 'center' }}>
        <Box
          component={'img'}
          src={'/logo.svg'}
          width={{ xs: 190, md: 250, textAlign: 'center' }}
        />
      </Box>
      <Typography variant="subtitle1">
        The mission of the Molly and Ed Shill Cares Foundation is to help all
        people and animals have a safe place to live and grow. We aim to end the
        cycle of violence and provide opportunities for success within our
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
      <Typography variant="subtitle1" sx={{ textAlign: 'center', mt: 4 }}>
        {`We are currently accepting grant applications for ${new Date().getFullYear()}`}
        .
      </Typography>
    </Container>
  );
};

export default Home;
