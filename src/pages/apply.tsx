import type { NextPage } from 'next';
import Simple from 'layouts/simple/Simple';
import Container from 'components/Container';
import ApplyForm from 'components/applyForm/ApplyForm';

interface Props {
  application?: GrantApplication;
}

const Home: NextPage = ({ application }: Props) => {
  return (
    <Simple>
      <Container>
        <ApplyForm application={application} />
      </Container>
    </Simple>
  );
};

export default Home;
