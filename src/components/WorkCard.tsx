import React from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

interface Props {
  image: string;
  organization: string;
  link: string;
  children: React.ReactNode;
}

const WorkCard = ({
  image,
  organization,
  link,
  children,
}: Props): JSX.Element => (
  <Stack
    direction={{
      xs: 'column',
      sm: 'row',
    }}
    spacing={4}
  >
    <Box sx={{ mx: { xs: 'auto', sm: 0 } }}>
      <NextLink href={link} passHref>
        <Link component={'a'}>
          <Box
            component={'img'}
            width={{ xs: '180px', md: '200px' }}
            src={image}
            alt={organization}
          />
        </Link>
      </NextLink>
    </Box>
    <Box sx={{ px: { xs: 1, md: 0 } }}>
      {children}
      <Box sx={{ mt: 3 }}>
        <NextLink href={link} passHref>
          <Link
            underline={'hover'}
          >{`Find out more about ${organization}`}</Link>
        </NextLink>
      </Box>
    </Box>
  </Stack>
);

export default WorkCard;
