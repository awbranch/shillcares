import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface Props {
  onCancel: () => void;
  onRetry: () => void;
  message: string;
  error: string;
}

const ErrorMessage = ({
  onCancel,
  onRetry,
  message,
  error,
}: Props): JSX.Element => {
  return (
    <Box>
      <Typography variant={'h1'}>Error</Typography>
      <Typography variant="subtitle1" paragraph>
        {message}
      </Typography>
      <Typography variant="body1" paragraph>
        {error}
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

        <Button
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
