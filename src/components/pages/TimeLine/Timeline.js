import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { Button } from "../../UI/Button/Button";
import { ContainerCard } from "../../UI/ContainerCard/ContainerCard";
import { PageHeader } from "../../UI/PageHeader/PageHeader";
import { AddSatelliteForm } from "./AddSatelliteForm/AddSatelliteForm";
import { SatelliteListTimeLine } from "./SatelliteListTimeLine/SatelliteListTimeLine";
import { SelectProperty } from "./SelectProperty/SelectProperty";

export const Timeline = () => {
  const [dataList, setDateList] = useState([]);

  const data = useOutletContext();

  const satelliteNamesAndId = data.map((item) => {
    return { name: item.name, id: item.satelliteId };
  });

  // if (dataList.length === 0) {
  //   let dateList10Months = [];
  //   let dataList10Months = [];
  //   for (let index = 0; index < 10; index++) {
  //     const todaysDate = new Date();
  //     todaysDate.setMonth(todaysDate.getMonth() - index);
  //     let currentMonth =
  //       (todaysDate.getMonth() < 10 ? "0" : "") + todaysDate.getMonth();
  //     let currentSeconds =
  //       (todaysDate.getSeconds() < 10 ? "0" : "") + todaysDate.getSeconds();
  //     let dateString =
  //       "" +
  //       todaysDate.getFullYear() +
  //       "-" +
  //       currentMonth +
  //       "-" +
  //       todaysDate.getDay() +
  //       "T" +
  //       todaysDate.getHours() +
  //       ":" +
  //       todaysDate.getMinutes() +
  //       ":" +
  //       currentSeconds +
  //       "+00:00";
  //     dateList10Months.push(dateString);
  //   }
  //   setDateList(dateList10Months);
  //   dateList10Months.forEach((element) => {
  //     let urlCall =
  //       "https://tle.ivanstanojevic.me/api/tle/44859/propagate?date=" + element;
  //     axios
  //       .get(urlCall)
  //       .then((res) => {
  //         dataList10Months.push(res.data);
  //         setDateList(dataList10Months);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // } else {
  //   console.log("we have data");
  // }

  const [showAddSatelliteForm, setShowAddSatelliteForm] = useState(false);
  const [satelliteList, setSatelliteList] = useState([]);

  const onAddSatelliteHandler = (data) => {
    setSatelliteList((satelliteList) => [...satelliteList, data]);
  };

  const useRemoveSatelliteHandler = (event) => {
    var index = satelliteList.indexOf(event);
    let newSatelliteList = [...satelliteList];
    newSatelliteList.splice(index, 1);
    setSatelliteList(newSatelliteList);
  };

  const ClearAllSatellites = () => {
    console.log('epic')
    setSatelliteList([]);
  };

  // console.log(satelliteList)

  const addSatelliteFormEventHandler = () => {
    if (showAddSatelliteForm === true) {
      setShowAddSatelliteForm(false);
    } else {
      setShowAddSatelliteForm(true);
    }
  };

  return (
    <ContainerCard>
      {showAddSatelliteForm ? (
        <AddSatelliteForm
          onClick={addSatelliteFormEventHandler}
          onAddSatellite={onAddSatelliteHandler}
          names={satelliteNamesAndId}
        />
      ) : null}
      <PageHeader
        pageDetail={{
          header: "See A Satellite's Attributes over the past 10 months",
          subHeading: "add satellites to the list and compare them too!",
          buttonTitle: "Clear Satellites",
          onClick: ClearAllSatellites
        }}
      />
      <Row>
        <Col md={4}>
          <Button
            onClick={addSatelliteFormEventHandler}
            buttonTitle={"Add Satellite"}
          />
          <SatelliteListTimeLine
            onRemoveSatellite={useRemoveSatelliteHandler}
            satelliteList={satelliteList}
          />
          <SelectProperty />
        </Col>
        <Col md={8}></Col>
      </Row>
    </ContainerCard>
  );
};
