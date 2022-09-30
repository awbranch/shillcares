import type { NextPage } from 'next';
import Simple from 'layouts/simple/Simple';
import Container from 'components/Container';
import ApplyForm from 'components/applyForm/ApplyForm';
import path from 'path';
import { promises as fs } from 'fs';

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

export async function getServerSideProps() {
  let application = null;
  if (process.env.FLAG_POPULATE_APPLY_FORM === 'true') {
    const file = path.join(process.cwd(), 'data', 'testApplication.json');
    application = JSON.parse(await fs.readFile(file, 'utf8'));
  }

  return {
    props: { application },
  };
}

export default Home;
