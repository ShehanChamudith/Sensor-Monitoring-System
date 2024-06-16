import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Container, Popover, Paper } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dashboard from "./components/Dashboard";
import Mainpage from './Pages/mainpage';
import Loginpage from './Pages/Login';

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
        {/* <AppBar position="static" sx={{ backgroundColor: "#0C1844" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Sensor Monitoring System
            </Typography>
            <IconButton color="inherit" onClick={handleNotificationClick}>
              <NotificationsIcon />
            </IconButton>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleNotificationClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Paper>
                <MenuItem onClick={handleNotificationClose}>Notification 1</MenuItem>
                <MenuItem onClick={handleNotificationClose}>Notification 2</MenuItem>
                <MenuItem onClick={handleNotificationClose}>Notification 3</MenuItem>
              </Paper>
            </Popover>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/sensors">
              Sensors
            </Button>
          </Toolbar>
        </AppBar> */}

        
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/dashboard" element={<Mainpage />} />
            <Route path="/test" element={<Dashboard />} />

          </Routes>
        
      </div>
    </Router>
  );
};

export default App;
