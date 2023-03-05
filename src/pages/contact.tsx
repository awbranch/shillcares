import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';

interface Props {}

const Contact: NextPage = ({}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h2" component="h2">
          Contact Us
        </Typography>
      </Container>
    </Main>
  );
};

export default Contact;
