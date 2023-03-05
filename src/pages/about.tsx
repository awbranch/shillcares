import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';

interface Props {}

const About: NextPage = ({}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">About Us</Typography>
      </Container>
    </Main>
  );
};

export default About;
