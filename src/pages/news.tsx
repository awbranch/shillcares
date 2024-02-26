import type { GetStaticProps, NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Anchor from 'components/Anchor';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import RichText from 'components/RichText';
import React from 'react';
import { Story } from 'types/story';
import { getStories } from 'utils/sanity';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

interface Props {
  stories: Story[];
}

const News: NextPage = ({ stories }: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1" sx={{ mb: 4 }}>
          News & Events
        </Typography>
        <Stack spacing={10}>
          {stories.map((s) => (
            <Box key={s._id}>
              <Anchor slug={s.slug} />
              <Typography variant="h3" component="h2">
                {s.title}
              </Typography>
              <Typography variant="body1">
                {s.location} - {new Date(s.date).toDateString()}
              </Typography>
              {s.imageUrl ? (
                <NextLink href={s.imageUrl} passHref>
                  <Link>
                    <Box
                      component={'img'}
                      sx={{ my: 1 }}
                      width={{ xs: '100%' }}
                      src={s.image}
                      alt={s.title}
                    />
                  </Link>
                </NextLink>
              ) : (
                <Box
                  component={'img'}
                  sx={{ my: 1 }}
                  width={{ xs: '100%' }}
                  src={s.image}
                  alt={s.title}
                />
              )}

              <RichText document={s.text} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const stories = await getStories();

  console.log(stories);

  return {
    props: { stories },
  };
};

export default News;
