import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { ContainerCard } from "../../UI/ContainerCard/ContainerCard";
import { PageHeader } from "../../UI/PageHeader/PageHeader";
import { AddSatelliteForm } from "../TimeLine/AddSatelliteForm/AddSatelliteForm";
import { PreChartData } from "./Charts/PreChartData";

import { SatelliteList } from "./SatelliteList/SatelliteList";

export const Comparison = () => {
  const [showHideSatelliteForm, setShowHideSatelliteForm] = useState(false);
  const showHideForm = () => {
    if (showHideSatelliteForm === true) {
      setShowHideSatelliteForm(false);
    } else {
      setShowHideSatelliteForm(true);
    }
  };

  const [satelliteList, setSatelliteList] = useState([]);

  const data = useOutletContext();

  const satelliteNamesAndId = data.map((item) => {
    return {
      name: item.name,
      id: item.satelliteId,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
  });

  

  const ClearAllSatellites = () => {
    setSatelliteList([]);
    setSatelliteDataList([]);
  };

  const [satelliteDataList, setSatelliteDataList] = useState([]);

  useEffect(() => {
    satelliteList.forEach((element) => {
      let satelliteId = element.id;
      let urlCall =
        "https://tle.ivanstanojevic.me/api/tle/" + satelliteId + "/propagate";
      if (satelliteDataList.find((i) => satelliteId === i.tle?.satelliteId)) {
        console.log('found')
      } else {
        axios
          .get(urlCall)
          .then((res) => {
            setSatelliteDataList((currentArray) => [...currentArray, res.data]);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }, [satelliteList, satelliteDataList]);

  const onAddSatelliteHandler = (data) => {
    setSatelliteList((satelliteList) => [...satelliteList, data]);
  };

  const useRemoveSatelliteHandler = (event) => {
    var index = satelliteList.indexOf(event);
    let newSatelliteList = [...satelliteList];
    let newSatelliteDataList = [...satelliteDataList];
    newSatelliteList.splice(index, 1);
    newSatelliteDataList.splice(index, 1);
    setSatelliteList(newSatelliteList);
    setSatelliteDataList(newSatelliteDataList);
  };

  console.log(satelliteDataList);
  console.log(satelliteList);

  return (
    <ContainerCard>
      {showHideSatelliteForm ? (
        <AddSatelliteForm
          onClick={showHideForm}
          onAddSatellite={onAddSatelliteHandler}
          names={satelliteNamesAndId}
        />
      ) : null}
      <PageHeader
        pageDetail={{
          header: "Compare upto 4 satellites and see how they are different",
          subHeading: "add satellites to get started",
          buttonTitle: "Clear Satellites",
          onClick: ClearAllSatellites,
        }}
      />
      <br></br>
      <SatelliteList
        satelliteList={satelliteList}
        onClick={showHideForm}
        onRemoveSatellite={useRemoveSatelliteHandler}
      />
      <br />
      <Row>
        <PreChartData
          satelliteList={satelliteList}
          satelliteDataList={satelliteDataList}
        />
      </Row>
    </ContainerCard>
  );
};
