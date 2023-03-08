import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import BioCard from 'components/BioCard';
import SimpleList from 'components/SimpleList';
import React from 'react';

interface Props {}

const About: NextPage = ({}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">About Us</Typography>

        <Typography variant="subtitle1" sx={{ mt: 3, mb: 2.5 }} paragraph>
          The Molly and Ed Shill Cares foundation was founded in 2022 with a
          goal of unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore.
        </Typography>

        <Typography variant="body1" paragraph>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?{' '}
        </Typography>

        <Typography variant="body1" paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Typography>
      </Container>
      <Box sx={{ backgroundColor: 'primary.dark' }}>
        <Container sx={{ color: 'white' }}>
          <Typography variant="h2">Foundation Facts</Typography>
          <Stack direction={'row'} spacing={10}>
            <Box>
              <Typography
                variant="h1"
                component="h3"
                sx={{ fontSize: '20rem' }}
              >
                8
              </Typography>
            </Box>
            <Box>
              <Typography variant="h1" component="h3">
                0.7m
              </Typography>
            </Box>
            <Box>
              <Typography variant="h1" component="h3">
                5m
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Container>
        <Typography variant="h2">Governance</Typography>

        <Stack direction={'column'} spacing={10} sx={{ pt: 4 }}>
          <BioCard
            name={'Molly Shill'}
            title={'President / Secretary'}
            image={'image-1x1.png'}
          >
            <Typography variant={'body1'} paragraph>
              Molly is passionate about caring for others and making the world a
              more peaceful and loving place.
            </Typography>
            <Typography variant={'body1'} paragraph>
              For the past 22 years, Molly has run a private acupuncture
              practice in Bushnell’s Basin. She specializes in oncology,
              acupuncture, and preventative care. She often states that Chinese
              Medicine is the best preventative medicine.
            </Typography>
            <Typography variant={'body1'} paragraph>
              Together with her husband and family, Molly hopes to oversee the
              Molly & Ed Shill Cares foundation&apos;s growth and help more
              people and animals in her local community. She is also on the
              Board of Directors for The Golisano Children’s Hospital and serves
              as co-chair of the 2023 Lollypop Capital Campaign.
            </Typography>
            <Typography variant="body1">
              <strong>Personal Life:</strong>
            </Typography>
            <Typography variant={'body1'} paragraph>
              A Finger Lakes native, Molly loves living on Canandaigua Lake with
              her husband, Ed their cats and horses. Most days, she can be seen
              in her garden or woodland area caring for birds, plants, and pets.
              She is also an avid reader and researcher, particularly on the
              topics of preventative medicine and oncology. She enjoys cooking
              and incorporating lots of vegetables!
            </Typography>
            <Typography variant="body1">
              <strong>Certifications:</strong>
            </Typography>
            <SimpleList
              items={[
                '2021 Certified Meditation Teacher',
                '2012 Certified End of Life Doula',
                '2010 Certified Yoga Instructor',
              ]}
            />
            <Typography variant="body1">
              <strong>Education:</strong>
            </Typography>
            <SimpleList
              items={[
                '2022 Doctorate in Acupuncture, Pacific College of Oriental Medicine',
                '2000 Masters of Acupuncture, New England School of Acupuncture',
                '1990 Masters of Community Services Administration, Alfred University',
                '1986 BA in Business, St. Bonaventure University',
              ]}
            />
          </BioCard>
          <BioCard
            name={'Ed Shill'}
            title={'Vice President / Treasurer'}
            image={'image-1x1.png'}
          >
            <Typography variant={'body1'} paragraph>
              A self-proclaimed workaholic and economics junkie, co-founder and
              board member Ed Shill has vast experience in various roles
              throughout his career.
            </Typography>
            <Typography variant={'body1'} paragraph>
              As the former CEO and President of QCI Asset Management and
              Managing Partner of Wealth Enhancement Group, both based in the
              Greater Rochester area, Ed brings a wealth of financial knowledge
              to the foundation.
            </Typography>
            <Typography variant={'body1'} paragraph>
              Dedicated to ending the cycle of violence, Ed serves as an
              honorary board member of Willow Domestic Violence Center and is a
              former board member of the Society for the Protection and Care of
              Children.
            </Typography>
            <Typography variant={'body1'} paragraph>
              Inspired by his wife, Molly, a huge animal lover, Ed also serves
              as the campaign co-chair of the 2023 Lollypop Farm Capital
              Campaign.
            </Typography>
            <Typography variant="body1">
              <strong>Personal Life:</strong>
            </Typography>
            <Typography variant={'body1'} paragraph>
              Growing up on a farm in Bath, NY, Ed has always known the value of
              hard work. He funded his way through college by changing tires at
              a truck stop. Later in graduate school, he taught economics to
              fund his own education.
            </Typography>
            <Typography variant={'body1'} paragraph>
              Today, Ed spends his spare time with the love of his life, Molly
              Branch Shill, and his three children, Katie, Mike, and Matt. He
              also loves his three cats, and two horses.
            </Typography>
            <Typography variant="body1">
              <strong>Education:</strong>
            </Typography>
            <SimpleList
              items={[
                'MA in Economics/Finance, University Center at Binghamton.',
                'BS in Economics/Finance, Brockport State College',
                'AAS in Accounting',
              ]}
            />
          </BioCard>
          <BioCard name={'Andrew Branch'} image={'image-1x1.png'}>
            <Typography variant={'body1'} paragraph>
              Andrew started his career at Xerox and has worked at several tech
              startups in Rochester and Silicon Valley. Andrew is passionate
              about using technology, innovation, and design to build products
              that positively impact people&amp;s lives.
            </Typography>
            <Typography variant={'body1'} paragraph>
              He is currently the Director of Product Engineering at Measures
              for Justice, a non-partisan research organization with the goal of
              making the criminal justice system more transparent.
            </Typography>
            <Typography variant="body1">
              <strong>Personal Life:</strong>
            </Typography>
            <Typography variant={'body1'} paragraph>
              Andrew was raised in Honeoye, NY, with his two sisters, where he
              learned how to hit a baseball, skip a stone, fix a bike, and clean
              a barn. He has always been deeply curious about science,
              technology, and human affairs. Today, he lives in Brighton, NY,
              with his wife, Kimberley, and daughter Helen.
            </Typography>
            <Typography variant="body1">
              <strong>Education:</strong>
            </Typography>
            <SimpleList
              items={[
                'MS in Computer Science, Rochester Institute of Technology',
                'BS in Computer Science, Siena College',
              ]}
            />
          </BioCard>
        </Stack>
      </Container>
    </Main>
  );
};

export default About;
