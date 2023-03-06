import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import BioCard from 'components/BioCard';

interface Props {}

const About: NextPage = ({}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">About Us</Typography>

        <Typography variant="subtitle1" sx={{ mt: 3 }} paragraph>
          The Molly and Ed Shill Cares foundation was founded in 2022 with a
          goal of unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </Typography>

        <Typography variant="body1" paragraph>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?{' '}
        </Typography>

        <Typography variant="body1" paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Typography>
      </Container>
      <Box sx={{ backgroundColor: 'primary.dark' }}>
        <Container sx={{ color: 'white' }}>
          <Typography variant="h2">Foundation Facts</Typography>
          <Stack direction={'row'} spacing={10}>
            <Box>
              <Typography
                variant="h1"
                component="h3"
                sx={{ fontSize: '20rem' }}
              >
                8
              </Typography>
            </Box>
            <Box>
              <Typography variant="h1" component="h3">
                0.7m
              </Typography>
            </Box>
            <Box>
              <Typography variant="h1" component="h3">
                5m
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Typography variant="h2">Governance</Typography>

        <Stack direction={'column'} spacing={10} sx={{ pt: 4 }}>
          <BioCard name={'Molly Shill'} title={'Title'} image={'image-1x1.png'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.{' '}
          </BioCard>
          <BioCard name={'Ed Shill'} title={'Title'} image={'image-1x1.png'}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.{' '}
          </BioCard>
          <BioCard
            name={'Andrew Branch'}
            title={'Title'}
            image={'image-1x1.png'}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.{' '}
          </BioCard>
        </Stack>
      </Container>
    </Main>
  );
};

export default About;
