import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface Props {
  onRetry: () => void;
}

const ErrorMessage = ({ onRetry }: Props): JSX.Element => {
  return (
    <Box>
      <Typography variant="subtitle1" paragraph>
        We apologize, but there was an error attempting to contact our server.
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
        <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          onClick={onRetry}
        >
          Retry
        </Button>
      </Stack>
    </Box>
  );
};

export default ErrorMessage;
