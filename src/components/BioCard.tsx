import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
  title: string;
  image: string;
  children: React.ReactNode;
}

const BioCard = ({ name, title, image, children }: Props): JSX.Element => (
  <Stack
    direction={{
      xs: 'column',
      sm: 'row',
    }}
    spacing={4}
  >
    <Box>
      <Box
        component={'img'}
        width={'300px'}
        src={image}
        alt={`${name} - ${title}`}
      />
    </Box>
    <Stack direction={'column'}>
      <Typography variant="h3" sx={{ pt: 2 }}>
        {name}
      </Typography>
      <Typography variant="h4">{title}</Typography>
      {children}
    </Stack>
  </Stack>
);

export default BioCard;
