import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={'subtitle2'} color="text.secondary" gutterBottom>
          &copy; Molly & Ed Shill Cares Foundation. {new Date().getFullYear()}.
          All rights reserved
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
