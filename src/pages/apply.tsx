import type { NextPage } from 'next';
import Simple from 'layouts/simple/Simple';
import Container from 'components/Container';
import ApplyForm from 'components/applyForm/ApplyForm';

interface Props {
  testMode: boolean;
}

const Home: NextPage = ({ testMode }: Props) => {
  return (
    <Simple>
      <Container>
        <ApplyForm testMode={testMode} />
      </Container>
    </Simple>
  );
};

export async function getServerSideProps(context) {
  const testMode = process.env.FLAG_POPULATE_APPLY_FORM === 'true';
  return {
    props: { testMode },
  };
}

export default Home;
