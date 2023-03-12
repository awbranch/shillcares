import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  title: string;
  message: string;
  message2?: string;
  onClose: () => void;
}

const SuccessMessage = ({
  title,
  message,
  message2,
  onClose,
}: Props): JSX.Element => {
  return (
    <Box>
      <Typography variant="h1">{title}</Typography>
      <Typography variant="body1" paragraph>
        {message}
      </Typography>
      {message2 && (
        <Typography variant="body2" paragraph>
          {message2}
        </Typography>
      )}

      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onClose}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default SuccessMessage;
