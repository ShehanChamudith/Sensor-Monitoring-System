import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Dashboard from "./components/Dashboard";
import Sensors from "./components/Sensors";
import SensorDetails from "./components/SensorDetails";
import Settings from "./components/Settings";

const App = () => {
  return (
    <Router>
      <div>
        <AppBar position="static" sx={{ backgroundColor: "#0C1844" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Sensor Monitoring System
            </Typography>
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/sensors" element={<Sensors />} />
            <Route path="/sensors/:id" element={<SensorDetails />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
