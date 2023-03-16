import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import globals from 'utils/globals';

interface Props {
  message: string;
  onClose: () => void;
}

const SuccessMessage = ({ message, onClose }: Props): JSX.Element => {
  return (
    <Box>
      <Typography variant="body1" paragraph>
        {message}
      </Typography>
      <Typography variant="body2" paragraph>
        {globals.FOUNDATION_DISCLAIMER}
      </Typography>

      <Box sx={{ mt: 5 }}>
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
