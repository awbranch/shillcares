import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface Props {
  onCancel: () => void;
  onRetry: () => void;
  message: string;
}

const ErrorMessage = ({ onCancel, onRetry, message }: Props): JSX.Element => {
  return (
    <Box>
      <Typography variant="h1">Error Submitting Application</Typography>
      <Typography variant="body1" paragraph>
        We apologize, but there was an error when attempting to submit your
        application to the server.
      </Typography>
      <Typography variant="body1" paragraph>
        {message}
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
        <Button
          sx={{ height: 54, minWidth: 150 }}
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          onClick={onRetry}
        >
          Retry
        </Button>

        <Button
          sx={{ minWidth: 150 }}
          component={'a'}
          variant="outlined"
          color="primary"
          size="large"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default ErrorMessage;
