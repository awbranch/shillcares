import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';

interface Props {}

const Work: NextPage = ({}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h2" component="h1">
          Our Work
        </Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          We support charities that are working to end the cycle of violence and
          provide opportunities for success within our communities
        </Typography>
      </Container>
    </Main>
  );
};

export default Work;
