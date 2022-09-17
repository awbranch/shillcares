import type { NextPage } from 'next';
import Simple from 'layouts/simple/Simple';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
  return (
    <Simple>
      <Container>
        <Typography variant="subtitle1">Apply</Typography>
      </Container>
    </Simple>
  );
};

export default Home;
