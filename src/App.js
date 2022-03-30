import React from "react";

import "./App.css";
import DashBoard from "./components/body/DashBoard";
import SideNav from "./components/header/SideNav";

import classes from "./App.css";
import TopNav from "./components/header/TopNav";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Comparison from "./components/ComparisonPage/comparison";

function App() {
  return (
    <div className="flex-container">
      <div className="side_nav flex-item">
        <SideNav />
      </div>
      <div className="body flex-item">
        <TopNav />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
