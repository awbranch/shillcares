import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
  title?: string;
  image: string;
  children: React.ReactNode;
}

const BioCard = ({ name, title, image, children }: Props): JSX.Element => (
  <Stack
    direction={{
      sm: 'column',
      md: 'row',
    }}
    spacing={4}
  >
    <Box>
      <Box
        component={'img'}
        width={{ xs: '100%', sm: '320px' }}
        src={image}
        alt={`${name} ${title ? ' - ' + title : ''} - Shill Cares Foundation`}
      />
    </Box>
    <Box sx={{ px: { xs: 1, md: 0 } }}>
      <Typography variant="h3">{name}</Typography>
      {title && <Typography variant="body2">{title}</Typography>}
      <Box sx={{ mt: 2 }}>{children}</Box>
    </Box>
  </Stack>
);

export default BioCard;
