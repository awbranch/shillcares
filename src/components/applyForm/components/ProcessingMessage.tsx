import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropagateLoader from 'react-spinners/PropagateLoader';

const ProcessingMessage = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h1">
        Your application is being submitted, please wait...
      </Typography>
      <Box
        sx={{
          textAlign: 'center',
          paddingTop: 3,
        }}
      >
        <PropagateLoader
          color={theme.palette.primary.main}
          loading={true}
          size={12}
        />
      </Box>
    </Box>
  );
};

export default ProcessingMessage;
