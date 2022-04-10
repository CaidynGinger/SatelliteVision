import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Comparison } from "./components/pages/Comparison/Comparison";
import { DashBoard } from "./components/pages/Dashboard/DashBoard";
import { Timeline } from "./components/pages/TimeLine/Timeline";

function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="compare" element={<Comparison />} />
          <Route path="timeline" element={<Timeline />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterComponent;
