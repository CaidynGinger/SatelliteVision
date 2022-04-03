import React from "react";

import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import { DashBoard } from "./components/pages/Dashboard/DashBoard";
import { Timeline } from "./components/pages/TimeLine/Timeline";
import { Comparison } from "./components/pages/Comparison/Comparison";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<DashBoard/>}/>
          <Route path="compare" element={<Comparison/>}/>
          <Route path="timeline" element={<Timeline/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
