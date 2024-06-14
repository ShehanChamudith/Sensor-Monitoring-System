import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={4}>
  <Grid item xs={12} sm={6} md={4}>
    <Paper elevation={3} sx={{ p: 2, backgroundColor: '#FF6969' }}>
      <Typography variant="h6">Total Sensors</Typography>
      <Typography variant="h4">3</Typography>
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper elevation={3} sx={{ p: 2, backgroundColor: '#FF6969' }}>
      <Typography variant="h6">Active Sensors</Typography>
      <Typography variant="h4">1</Typography>
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Paper elevation={3} sx={{ p: 2, backgroundColor: '#FF6969' }}>
      <Typography variant="h6">Alerts</Typography>
      <Typography variant="h4">5</Typography>
    </Paper>
  </Grid>
</Grid>

    </div>
  );
};

export default Dashboard;
