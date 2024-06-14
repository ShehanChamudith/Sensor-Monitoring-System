import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Container } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dashboard from "./components/Dashboard";
// import Sensors from "./components/Sensors";
// import SensorDetails from "./components/SensorDetails";
// import Settings from "./components/Settings";

const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div>
        <AppBar position="static" sx={{ backgroundColor: "#0C1844" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Sensor Monitoring System
            </Typography>
            <IconButton color="inherit" onClick={handleNotificationClick}>
              <NotificationsIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleNotificationClose}
              keepMounted
            >
              <MenuItem onClick={handleNotificationClose}>Notification 1</MenuItem>
              <MenuItem onClick={handleNotificationClose}>Notification 2</MenuItem>
              <MenuItem onClick={handleNotificationClose}>Notification 3</MenuItem>
            </Menu>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/sensors">
              Sensors
            </Button>
            <Button color="inherit" component={Link} to="/settings">
              Settings
            </Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/sensors" element={<Sensors />} />
            <Route path="/sensors/:id" element={<SensorDetails />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
