import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import BioCard from 'components/BioCard';
import Facts from 'components/Facts';
import React from 'react';
import Box from '@mui/material/Box';
import { IBoard } from '../types/contentful';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { GetStaticProps } from 'next';

interface Props {
  boardMembers: IBoard[];
}

const About: NextPage = ({ boardMembers }: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">About Us</Typography>

        <Typography variant="subtitle1" sx={{ mt: 3, mb: 2.5 }} paragraph>
          The Molly and Ed Shill Cares foundation was founded in 2022 with a
          goal to help people and animals within their community have a safer
          place to live and thrive. Their aim is to help end the cycle of
          violence, provide opportunities for success and inspire loving
          outcomes within their communities.
        </Typography>
      </Container>
      <Box sx={{ mt: 3, mb: 6 }}>
        <Facts grants="8" totalGranted="0.7m" endowment="5m" />
      </Box>
      <Container>
        <Typography variant="h2">Governance</Typography>

        <Stack direction={'column'} spacing={10} sx={{ pt: 4 }}>
          {boardMembers.map((m) => (
            <div key={m.sys.id}>
              <BioCard
                name={m.fields.name}
                title={m.fields.title}
                image={m.fields.image.fields.file.url}
              >
                {documentToReactComponents(m.fields.biography, {
                  renderNode: {
                    [BLOCKS.PARAGRAPH]: (node, children) => (
                      <Typography variant="body1" paragraph>
                        {children}
                      </Typography>
                    ),
                  },
                })}
              </BioCard>
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

  const collection = await client.getEntries({
    content_type: 'board',
  });

  const boardMembers = (collection.items as IBoard[]).sort(
    (g1, g2) => g1.fields.order - g2.fields.order,
  );

  return {
    props: { boardMembers },
  };
};

export default About;
