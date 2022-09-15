import React from 'react';
import Box from '@mui/material/Box';

interface Props {
  children: React.ReactNode;
  // All other props
  [x: string]: any;
}

const Container = ({ children, ...rest }: Props): JSX.Element => (
  <Box
    maxWidth={{ sm: 720, md: 1024 }}
    width={1}
    margin={'0 auto'}
    paddingX={2}
    paddingY={{ xs: 2, sm: 3, md: 4 }}
    {...rest}
  >
    {children}
  </Box>
);

export default Container;
