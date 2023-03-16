import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropagateLoader from 'react-spinners/PropagateLoader';

const ProcessingMessage = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box sx={{ textAlign: 'center' }}>
      <PropagateLoader
        color={theme.palette.primary.dark}
        loading={true}
        size={12}
      />
      <Typography variant="subtitle1" sx={{ pt: 4 }}>
        Submitting. Please Wait.
      </Typography>
    </Box>
  );
};

export default ProcessingMessage;
