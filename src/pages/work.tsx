import type { GetStaticProps, NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import WorkCard from 'components/WorkCard';
import { IGrantee } from '../types/contentful';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

interface Props {
  grantees: IGrantee[];
}

const Work: NextPage = ({ grantees }: Props) => {
  console.log(grantees);
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
                {documentToReactComponents(g.fields.description, {
                  renderNode: {
                    [BLOCKS.PARAGRAPH]: (node, children) => (
                      <Typography variant="body1" paragraph>
                        {children}
                      </Typography>
                    ),
                  },
                })}
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

  const collection = await client.getEntries({
    content_type: 'grantee',
  });

  const grantees = (collection.items as IGrantee[]).sort(
    (g1, g2) => g1.fields.order - g2.fields.order,
  );

  return {
    props: { grantees },
  };
};

export default Work;
