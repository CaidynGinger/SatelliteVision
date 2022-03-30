import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import GetTLEData from "./services/GetDateData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comparison from "./components/ComparisonPage/comparison";
import DashBoard from "./components/body/DashBoard";

ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<DashBoard />} />
        <Route path="/comparison" element={<Comparison />} />
      </Route>
    </Routes>
  </BrowserRouter>
  , document.getElementById("root"));
