import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

//https://stackoverflow.com/questions/64763718/how-do-i-make-a-sticky-footer-in-next-js-react

const Simple = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Box title="Shill Cares Foundation" sx={{ textAlign: 'center', mb: 3 }}>
        <Box
          component={'img'}
          src={'/logo.svg'}
          width={{ xs: 220, sm: 280, textAlign: 'center' }}
        />
      </Box>
      {children}
      <Box
        sx={{
          backgroundColor: 'primary.dark',
          mt: 5,
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
    </>
  );
};

export default Simple;
