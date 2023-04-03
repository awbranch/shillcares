import React from 'react';
import Box from '@mui/material/Box';
import Container from './Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface FactProps {
  icon: string;
  value: string;
  label: string;
}

const Fact = ({ icon, value, label }: FactProps): JSX.Element => (
  <Stack
    direction={{ xs: 'row', sm: 'column' }}
    alignItems={{ xs: 'baseline', sm: 'center' }}
    spacing={{ xs: 2, sm: 0 }}
  >
    <Box
      component={'img'}
      display={'block'}
      src={icon}
      width={{ xs: 33, sm: 45, md: 55 }}
      height={{ xs: 33, sm: 45, md: 55 }}
    />

    <Typography
      variant="h4"
      component="div"
      sx={{
        fontSize: { xs: '2.7rem', sm: '3.75rem', md: '4.75rem' },
      }}
    >
      {value}
    </Typography>
    <Typography
      variant="h4"
      component="div"
      sx={{ fontSize: { xs: '1.3rem', md: '1.1rem' }, fontWeight: 400 }}
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
  <Box sx={{ backgroundColor: 'primary.light', py: 3 }}>
    <Container sx={{ color: 'primary.dark' }}>
      <Typography variant="h2">Foundation Facts</Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-around"
        sx={{ mt: { xs: 3, sm: 6 }, ml: { xs: 1, sm: 0 } }}
      >
        <Fact
          icon={'trophy-light.svg'}
          value={grants}
          label={'Grants Awarded'}
        />
        <Fact
          icon={'hand-heart-light.svg'}
          value={totalGranted}
          label={'Total Granted'}
        />
        <Fact
          icon={'piggy-bank-sharp-light.svg'}
          value={endowment}
          label={'Endowment'}
        />
      </Stack>
    </Container>
  </Box>
);

export default Facts;
