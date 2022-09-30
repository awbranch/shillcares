import React from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

//https://stackoverflow.com/questions/64763718/how-do-i-make-a-sticky-footer-in-next-js-react

const Simple = ({ children }: Props): JSX.Element => {
  return (
    <Box
      sx={{
        height: '100vh',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box title="Shill Cares Foundation" sx={{ textAlign: 'center', mb: 3 }}>
        <NextLink href={'/'} passHref>
          <Box component={'a'}>
            <Box
              component={'img'}
              src={'/logo.svg'}
              width={{ xs: 220, sm: 280, textAlign: 'center' }}
            />
          </Box>
        </NextLink>
      </Box>
      {children}
      <Box
        sx={{
          mt: 'auto',
        }}
        component={'footer'}
      >
        <Box
          sx={{
            backgroundColor: 'primary.dark',
            mt: 3,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Box
            component={'img'}
            src={'/logo-lite.svg'}
            width={{ xs: 220, sm: 280, textAlign: 'center' }}
          />
          <Typography
            variant="caption"
            sx={{ display: 'block', color: 'white', py: 1 }}
          >
            © {new Date().getFullYear()} Copyright Molly and Ed Shill Cares
            Foundation.
            <br />
            All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Simple;
