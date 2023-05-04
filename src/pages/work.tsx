import type { GetStaticProps, NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import WorkCard from 'components/WorkCard';
import RichText from 'components/RichText';
import React from 'react';
import { Grantee } from 'types/grantee';
import { getGrantees } from 'utils/sanity';

interface Props {
  grantees: Grantee[];
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
            <div key={g._id}>
              <WorkCard image={g.logo} organization={g.name} link={g.url}>
                <Typography variant="h3" component={'h2'} sx={{ mt: 0, mb: 1 }}>
                  {g.name}
                </Typography>
                <RichText document={g.description} />
              </WorkCard>
            </div>
          ))}
        </Stack>
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const grantees = await getGrantees();

  return {
    props: { grantees },
  };
};

export default Work;
