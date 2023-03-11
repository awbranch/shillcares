import React from 'react';
import Box from '@mui/material/Box';
import Container from './Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface FactProps {
  value: string;
  label: string;
}

const Fact = ({ value, label }: FactProps): JSX.Element => (
  <Stack direction="column" alignItems="center">
    <Typography
      variant="h4"
      component="div"
      sx={{
        fontSize: { xs: '3.0rem', sm: '4.25rem', md: '5.5rem' },
        lineHeight: { xs: '4.0rem', sm: '5.25rem', md: '6.5rem' },
      }}
    >
      {value}
    </Typography>
    <Typography
      variant="h4"
      component="div"
      sx={{ fontSize: { xs: '0.9rem', md: '1.2rem' } }}
    >
      {label}
    </Typography>
  </Stack>
);

interface FactsProps {
  grants: string;
  totalGranted: string;
  endowment: string;
}

const Facts = ({
  grants,
  totalGranted,
  endowment,
}: FactsProps): JSX.Element => (
  <Box sx={{ backgroundColor: 'primary.dark' }}>
    <Container sx={{ color: 'white' }}>
      <Typography variant="h2">Foundation Facts</Typography>
      <Stack direction="row" justifyContent="space-around" sx={{ mt: 1 }}>
        <Fact value={grants} label={'Grants Awarded'} />
        <Fact value={totalGranted} label={'Total Granted'} />
        <Fact value={endowment} label={'Endowment'} />
      </Stack>
    </Container>
  </Box>
);

export default Facts;
