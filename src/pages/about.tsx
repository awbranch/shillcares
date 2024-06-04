import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import BioCard from 'components/BioCard';
import Facts from 'components/Facts';
import RichText from 'components/RichText';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { GetStaticProps } from 'next';
import { formatMillions } from 'utils/utils';
import { BoardMember } from 'types/boardMember';
import { getBoardMembers, getEndowmentBalance, getGrants } from 'utils/sanity';

interface Props {
  grantsAwarded: string;
  totalGranted: string;
  endowment: string;
  boardMembers: BoardMember[];
}

const About: NextPage = ({
  grantsAwarded,
  totalGranted,
  endowment,
  boardMembers,
}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">About Us</Typography>

        <Typography variant="subtitle1" sx={{ mt: 3, mb: 2.5 }} paragraph>
          The Molly and Ed Shill Cares Foundation was founded in 2022 with a
          goal to help people and animals within their community have a safer
          place to live and thrive. Their aim is to help end the cycle of
          violence, provide opportunities for success and inspire loving
          outcomes within their communities.
        </Typography>
      </Container>
      <Box id="facts" sx={{ mt: 3, mb: 6 }}>
        <Facts
          grants={grantsAwarded}
          totalGranted={totalGranted}
          endowment={endowment}
        />
      </Box>
      <Container>
        <Typography variant="h2" id="governance">
          Governance
        </Typography>

        <Stack direction={'column'} spacing={10} sx={{ pt: 4 }}>
          {boardMembers.map((m) => (
            <div key={m._id}>
              <BioCard name={m.name} title={m.title} image={m.image}>
                <RichText document={m.biography} />
              </BioCard>
            </div>
          ))}
        </Stack>
      </Container>
      <Container sx={{ mb: 10 }}>
        <Typography variant="h2" id="logos">
          Logos
        </Typography>
        <Typography variant="body1" sx={{ mt: 3, mb: 2.5 }} paragraph>
          Download the Molly and Ed Shill Cares Foundation logos and logo style
          guide for both print and web usage.
        </Typography>

        <Button
          target="_blank"
          href="/shill-cares-logos.zip"
          variant="contained"
          component="a"
          color="primary"
          size="large"
          type="submit"
        >
          Download Logos Zip
        </Button>
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const boardMembers = await getBoardMembers();
  const grants = await getGrants();
  const ebal = await getEndowmentBalance();

  const grantsAwarded = grants.length.toString();
  const totalGranted = formatMillions(grants.reduce((r, g) => g.amount + r, 0));

  const endowment = formatMillions(ebal.balance);

  return {
    props: {
      grantsAwarded,
      totalGranted,
      endowment,
      boardMembers,
    },
  };
};

export default About;
