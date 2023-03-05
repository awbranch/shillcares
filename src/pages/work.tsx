import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';

interface Props {}

const Work: NextPage = ({}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">Our Work</Typography>
      </Container>
    </Main>
  );
};

export default Work;
