import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import globals from 'utils/globals';
import NextLink from 'next/link';
import Button from '@mui/material/Button';

const SuccessMessage = (): JSX.Element => {
  return (
    <Box>
      <Typography variant="h1">Grant Application Received</Typography>
      <Typography variant="body1" paragraph>
        {globals.APPLICATION_RECEIVED}
      </Typography>
      <Typography variant="body2" paragraph>
        {globals.FOUNDATION_DISCLAIMER}
      </Typography>

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <NextLink href="/" passHref>
          <Button
            sx={{ height: 54, minWidth: 200 }}
            component={'a'}
            variant="contained"
            color="primary"
            size="large"
          >
            Home
          </Button>
        </NextLink>
      </Box>
    </Box>
  );
};

export default SuccessMessage;
