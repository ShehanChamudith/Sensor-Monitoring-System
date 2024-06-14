import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import CountUp from 'react-countup';
import ProgressiveChart from "./Chart"; // import the chart component

const Dashboard = () => {
  const [sensor, setSensor] = useState(3);
  const [activeSensor, setActiveSensor] = useState(1);
  const [alert, setAlert] = useState(5);

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, backgroundColor: "#FF6969" }}>
            <h1 className="text-center text-white font-normal text-lg">
              Total Sensors
            </h1>
            <h2 className="text-center text-white font-semibold text-5xl">
              <CountUp end={sensor} duration={3} />
            </h2>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, backgroundColor: "#FF6969" }}>
            <h1 className="text-center text-white font-normal text-lg">
              Active Sensors
            </h1>
            <h2 className="text-center text-white font-semibold text-5xl">
              <CountUp end={activeSensor} duration={3} />
            </h2>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2, backgroundColor: "#FF6969" }}>
            <h1 className="text-center text-white font-normal text-lg">
              Alerts
            </h1>
            <h2 className="text-center text-white font-semibold text-5xl">
              <CountUp end={alert} duration={3} />
            </h2>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ProgressiveChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
