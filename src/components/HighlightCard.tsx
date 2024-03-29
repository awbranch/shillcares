import React from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface Props {
  orientation: 'left' | 'right';
  image: string;
  label: string;
  link: string;
  children: React.ReactNode;
}

const HighlightCard = ({
  orientation,
  image,
  label,
  link,
  children,
}: Props): JSX.Element => (
  <Stack
    direction={{
      xs: 'column',
      md: orientation == 'left' ? 'row' : 'row-reverse',
    }}
    alignItems={{ xs: 'left', md: 'center' }}
    justifyContent={'flex-start'}
    spacing={{ xs: 1, md: 6 }}
  >
    <Box flex={1}>
      <NextLink href={link} passHref>
        <Link component={'a'}>
          <Box
            component={'img'}
            width={1}
            height={1}
            src={image}
            alt={label}
            sx={{ borderRadius: '10px' }}
          />
        </Link>
      </NextLink>
    </Box>
    <Box flex={1} sx={{ px: { xs: 1, md: 0 } }}>
      <Typography variant={'body1'}>{children}</Typography>
      <Box sx={{ mt: 2 }}>
        <NextLink href={link} passHref>
          <Link underline={'hover'}>{label}</Link>
        </NextLink>
      </Box>
    </Box>
  </Stack>
);

export default HighlightCard;
