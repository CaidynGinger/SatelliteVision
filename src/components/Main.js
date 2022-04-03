import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoadingScreen } from "./LoadingScreen/LoadingScreen";

import classes from "./main.module.css";

import { SideDrawer } from "./Navigation/SideDrawer";

const Main = () => {
  const [satelliteData, setSatelliteData] = useState([0]);

  const [dataReceived, setDataReceived] = useState(true);

  useEffect(() => {
    axios
      .get("https://tle.ivanstanojevic.me/api/tle?page-size=100")
      .then((res) => {
        setSatelliteData(res.data.member);
        console.log(res.data.member);
        setDataReceived(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.main_item}>
        <SideDrawer />
      </div>
      <div className={classes.main_item}>
        {dataReceived ? <LoadingScreen /> : <Outlet context={satelliteData} />}
      </div>
    </div>
  );
};

export default Main;
