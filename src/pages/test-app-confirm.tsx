import type { NextPage } from 'next';
import Container from 'components/Container';
import ApplicationConfirmationEmail from '../components/email/ApplicationConfirmationEmail';
import path from 'path';
import { promises as fs } from 'fs';

interface Props {
  application: GrantApplication;
  logoPath: string;
  submitted: string;
}

const TestAppConfirm: NextPage = ({
  application,
  logoPath,
  submitted,
}: Props) => {
  return (
    <Container>
      <ApplicationConfirmationEmail
        application={application}
        logoPath={logoPath}
        submitted={submitted}
      />
    </Container>
  );
};

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'data', 'testApplication.json');
  const application = JSON.parse(await fs.readFile(file, 'utf8'));
  const submitted = new Date().toLocaleDateString();
  const logoPath = 'email-header.png';
  return {
    props: { application, logoPath, submitted }, // will be passed to the page component as props
  };
}

export default TestAppConfirm;