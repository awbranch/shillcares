import React from 'react';
import Box from '@mui/material/Box';

interface Props {
  slug: string;
}

const Anchor = ({ slug }: Props): JSX.Element => (
  <Box sx={{ position: 'relative', top: '-130px' }}>
    <a id={slug}></a>
  </Box>
);

export default Anchor;
