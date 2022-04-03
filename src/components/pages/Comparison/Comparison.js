import React, { useCallback, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { BarChartVelocity } from "./Charts/BarChartVelocity/BarChartVelocity";

import classes from "./Comparison.module.css";
import { AddSatelliteForm } from "./SatelliteList/AddSatelliteForm/AddSatelliteForm";
import { SatelliteList } from "./SatelliteList/SatelliteList";

import SatelliteSvg1 from "./SatelliteList/UI/Resources/Sat 1.svg";
import SatelliteSvg2 from "./SatelliteList/UI/Resources/Sat 2.svg";
import SatelliteSvg3 from "./SatelliteList/UI/Resources/Sat 3.svg";
import SatelliteSvg4 from "./SatelliteList/UI/Resources/Sat 4.svg";

export const Comparison = () => {
  const [showHideSatelliteForm, setShowHideSatelliteForm] = useState(false);
  const showHideForm = () => {
    if (showHideSatelliteForm === true) {
      setShowHideSatelliteForm(false);
    } else {
      setShowHideSatelliteForm(true);
    }
  };

  const data = useOutletContext();
  let satelliteNamesList = [];

  data.forEach((element) => {
    satelliteNamesList.push({
      name: element.name,
      id: element.satelliteId,
    });
  });
  const [selectedSatelliteList, setSelectedSatelliteList] = useState([]);
  const addSatelliteHandler = (satellite) => {
    selectedSatelliteList.push(satellite);
    setSelectedSatelliteList(selectedSatelliteList);
    setShowHideSatelliteForm(false);
  };

  const clearSatellitesHandler = () => {
    setSelectedSatelliteList([]);
    console.log(selectedSatelliteList)
  }

  return (
    <div>
      {showHideSatelliteForm ? (
        <AddSatelliteForm
          satelliteNamesList={satelliteNamesList}
          showHideForm={showHideForm}
          setSelectedSatellite={addSatelliteHandler}
        />
      ) : null}
      <Container className={classes.container}>
        <Row>
          <div className={classes.header_container}>
            <div>
              <h1>Compare Satellites</h1>
              <h3>
                add satellites to the list and compare them to more added
                satellites
              </h3>
            </div>
            <div>
              <button onClick={clearSatellitesHandler}>Clear Satellites</button>
            </div>
          </div>
        </Row>
        <SatelliteList
          satelliteList={selectedSatelliteList}
          showHideForm={showHideForm}
        />
        {/* <BarChartVelocity /> */}
      </Container>
    </div>
  );
};
