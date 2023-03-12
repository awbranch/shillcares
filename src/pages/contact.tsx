import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import ContactForm from 'components/forms/ContactForm';
import path from 'path';
import { promises as fs } from 'fs';

interface Props {
  contactInfo: ContactInfo;
}

const Contact: NextPage = ({ contactInfo }: Props) => {
  return (
    <Main>
      <Container>
        <ContactForm contactInfo={contactInfo} />
      </Container>
    </Main>
  );
};

export async function getServerSideProps() {
  let contactInfo = null;
  if (process.env.FLAG_POPULATE_CONTACT_FORM === 'true') {
    const file = path.join(process.cwd(), 'data', 'testContact.json');
    contactInfo = JSON.parse(await fs.readFile(file, 'utf8'));
  }

  return {
    props: { contactInfo },
  };
}

export default Contact;
