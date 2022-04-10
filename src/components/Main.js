import axios from "axios";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoadingScreen } from "./LoadingScreen/LoadingScreen";

import classes from "./main.module.css";

import { SideDrawer } from "./Navigation/SideDrawer";

const Main = ({username}) => {
  const [satelliteData, setSatelliteData] = useState([]);

  const [dataReceived, setDataReceived] = useState(true);

  useEffect(() => {
    axios
      .get("https://tle.ivanstanojevic.me/api/tle?page-size=100")
      .then((res) => {
        setSatelliteData(res.data.member);
        setDataReceived(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div >
      <SideDrawer username={username}/>
      <div className={classes.main}>
        {dataReceived ? <LoadingScreen /> : <Outlet context={satelliteData} />}
      </div>
    </div>
  );
};

export default Main;
