import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropagateLoader from 'react-spinners/PropagateLoader';

interface Props {
  message: string;
}

const ProcessingMessage = ({ message }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant={'h1'}>Please Wait</Typography>
      <Typography variant="subtitle1" paragraph>
        {message}
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
