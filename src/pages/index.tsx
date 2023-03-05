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
        <Typography variant="body1" sx={{ mt: 3 }}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }} paragraph>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?
        </Typography>
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
