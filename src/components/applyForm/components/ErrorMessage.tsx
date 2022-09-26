import React from 'react';
import Box from '@mui/material/Box';

interface Props {
  message: string;
}

const ErrorMessage = ({ message }: Props): JSX.Element => {
  return <Box>Error {message}</Box>;
};

export default ErrorMessage;
