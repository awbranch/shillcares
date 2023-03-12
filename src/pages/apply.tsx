import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import ApplyForm from 'components/forms/ApplyForm';
import path from 'path';
import { promises as fs } from 'fs';
import Typography from '@mui/material/Typography';
import React from 'react';

interface Props {
  application?: GrantApplication;
}

const Apply: NextPage = ({ application }: Props) => {
  return (
    <Main>
      <Container>
        <ApplyForm application={application} />
      </Container>
    </Main>
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

export default Apply;
