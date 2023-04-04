import type { GetStaticProps, NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import WorkCard from 'components/WorkCard';
import { IGrantee } from '../types/contentful';
import { createClient } from 'contentful';
import RichText from '../components/RichText';
import React from 'react';

interface Props {
  grantees: IGrantee[];
}

const Work: NextPage = ({ grantees }: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">Our Work</Typography>
        <Typography variant="subtitle1" sx={{ mt: 3 }}>
          We support charities that are working to end the cycle of violence and
          provide opportunities for success within our communities.
        </Typography>

        <Stack spacing={{ xs: 15, sm: 10 }} sx={{ mt: { xs: 15, sm: 10 } }}>
          {grantees.map((g) => (
            <div key={g.sys.id}>
              <WorkCard
                image={g.fields.image.fields.file.url}
                organization={g.fields.name}
                link={g.fields.url}
              >
                <Typography variant="h3" component={'h2'} sx={{ mt: 0, mb: 1 }}>
                  {g.fields.name}
                </Typography>
                <RichText document={g.fields.description} />
              </WorkCard>
            </div>
          ))}
        </Stack>
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const grantees = (
    await client.getEntries({
      content_type: 'grantee',
      order: 'fields.order',
    })
  ).items as IGrantee[];

  return {
    props: { grantees },
  };
};

export default Work;
