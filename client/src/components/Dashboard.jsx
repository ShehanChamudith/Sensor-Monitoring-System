import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import CountUp from "react-countup";
import ProgressiveChart from "./Chart"; // import the chart component

const Dashboard = () => {
  const [sensor, setSensor] = useState(3);
  const [activeSensor, setActiveSensor] = useState(1);
  const [alert, setAlert] = useState(5);

  return (
    <div className=" p-4 h-[85vh] w-full">
      <div className="px-10 py-5 border border-red-500">
        <div className="flex gap-10 border border-red-600">
          <div className="w-full bg-[#FF6969] rounded-lg p-3">
            <h1 className="text-center text-white font-normal text-lg">
              Total Sensors
            </h1>
            <h2 className="text-center text-white font-semibold text-5xl">
              <CountUp end={sensor} duration={3} />
            </h2>
          </div>
          <div className="w-full bg-[#FF6969] rounded-lg p-3">
            <h1 className="text-center text-white font-normal text-lg">
              Active Sensors
            </h1>
            <h2 className="text-center text-white font-semibold text-5xl">
              <CountUp end={activeSensor} duration={3} />
            </h2>
          </div>
          <div className="w-full bg-[#FF6969] rounded-lg p-3">
            <h1 className="text-center text-white font-normal text-lg">
              Alerts
            </h1>
            <h2 className="text-center text-white font-semibold text-5xl">
              <CountUp end={alert} duration={3} />
            </h2>
          </div>
        </div>
      </div>

      <div className="flex px-5 mt-5 border border-red-500 h-[65vh] w-full items-center">
        <div className="border border-green-500">
        <ProgressiveChart />
        </div>

        <div >

        </div>
       
      </div>
    </div>
  );
};

export default Dashboard;
