import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import HighlightCard from 'components/HighlightCard';

const Home: NextPage = () => {
  return (
    <Main>
      <Container>
        <Typography variant="h1" sx={{ maxWidth: '690px' }}>
          Helping people and animals have a safe place to live and thrive.
        </Typography>
        <Box>
          <Box
            component={'img'}
            alt={'Mother, daughter and pet dog looking out the front door.'}
            src={'/home.jpg'}
            sx={{ mt: 4, width: '100%', borderRadius: '10px' }}
          />
        </Box>

        <Stack
          direction={'column'}
          spacing={{ xs: 10, md: 15 }}
          sx={{ my: 15 }}
        >
          <HighlightCard
            orientation={'left'}
            image={'/comps/gettyimages-1134241181-170667a.jpg'}
            label={'Find out more about our work'}
            link={'/work'}
          >
            We support charities that are working to end the cycle of violence
            and provide opportunities for success within our communities.
          </HighlightCard>

          <HighlightCard
            orientation={'right'}
            image={'molly-ed.jpg'}
            label={'Find out more about us'}
            link={'/about'}
          >
            Founded in 2022 the Molly and Ed Shill Cares Foundation was
            established to help charities in New York’s Monroe and Ontario
            counties.
          </HighlightCard>

          <HighlightCard
            orientation={'left'}
            image={'comps/gettyimages-1203524421-170667a.jpg'}
            label={'Please contact us'}
            link={'/contact'}
          >
            We are interested to hear your ideas about new ways we can help our
            community.
          </HighlightCard>
        </Stack>
      </Container>
    </Main>
  );
};

export default Home;
