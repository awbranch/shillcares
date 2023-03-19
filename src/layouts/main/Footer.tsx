import React from 'react';
import Box from '@mui/material/Box';
import NextLink from 'next/link';

const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        mt: 'auto',
      }}
      component={'footer'}
    >
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          pt: 3,
          textAlign: 'center',
        }}
      >
        <NextLink href={'/'} passHref>
          <Box component={'a'}>
            <Box
              component={'img'}
              src={'/logo-lite.svg'}
              width={{ xs: 200, textAlign: 'center' }}
            />
          </Box>
        </NextLink>
      </Box>
    </Box>
  );
};

export default Footer;
