import type { NextPage } from 'next';
import Simple from 'layouts/simple/Simple';
import Container from 'components/Container';
import ApplyForm from 'components/ApplyForm';

const Home: NextPage = () => {
  return (
    <Simple>
      <Container>
        <ApplyForm />
      </Container>
    </Simple>
  );
};

export default Home;
