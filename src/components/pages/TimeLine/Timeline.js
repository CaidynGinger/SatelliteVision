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
import { TimeLineGraph } from "./TimeLineGraph/TimeLineGraph";

export const Timeline = () => {
  const [chartDataList, setChartDataList] = useState([]);
  const [chartLabelsList, setChartLabelsList] = useState([]);
  const [selected, setSelected] = useState("altitude");

  const data = useOutletContext();

  const [showAddSatelliteForm, setShowAddSatelliteForm] = useState(false);
  const [satelliteList, setSatelliteList] = useState([]);

  const satelliteNamesAndId = data.map((item) => {
    return {
      name: item.name,
      id: item.satelliteId,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
  });

  useEffect(() => {
    let dateList = [];
    for (let index = 0; index < 10; index++) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const todaysDate = new Date();
      todaysDate.setMonth(todaysDate.getMonth() - index);
      dateList.push(monthNames[todaysDate.getMonth()]);
    }
    setChartLabelsList(dateList);
  }, []);

  useEffect(() => {
    const now = new Date()
    satelliteList.forEach((element) => {
      let satelliteId = element.id;
      let dateList10Months = [];
      for (let index = 0; index < 10; index++) {

        // bad code 

        // const todaysDate = new Date(yyyy-mm-ddThh:mm:ss+00:00);
        // todaysDate.setMonth(todaysDate.getMonth() - index);
        // let currentMonth =
        //   (todaysDate.getMonth() < 10 ? "0" : "") + todaysDate.getMonth();
        // let currentSeconds =
        //   (todaysDate.getSeconds() < 10 ? "0" : "") + todaysDate.getSeconds();
        // let currentMinuets =
        //   (todaysDate.getMinutes() < 10 ? "0" : "") + todaysDate.getMinutes();
        // let dateString =
        //   "" +
        //   todaysDate.getFullYear() +
        //   "-" +
        //   currentMonth +
        //   "-" +
        //   todaysDate.getDay() +
        //   "T" +
        //   todaysDate.getHours() +
        //   ":" +
        //   currentMinuets +
        //   ":" +
        //   currentSeconds +
        //   "+00:00";
        // dateList10Months.push(dateString);

        //clean code
        dateList10Months.push(
          new Date(new Date().setMonth(now.getMonth() - index))
            .toISOString()
            .split(".")[0] + "+00:00"
        );
      }
      dateList10Months.forEach((element) => {
        let urlCall =
          "https://tle.ivanstanojevic.me/api/tle/" +
          satelliteId +
          "/propagate?date=" +
          element;
        // debugger
        if (chartDataList.find((i) => satelliteId === i.tle?.satelliteId)) {
        } else {
          axios
            .get(urlCall)
            .then((res) => {
              setChartDataList((currentArray) => [...currentArray, res.data]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    });
  }, [satelliteList, chartDataList]);

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
    setSatelliteList([]);
    setChartDataList([]);
  };

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
          onClick: ClearAllSatellites,
        }}
      />
      <Row>
        <div>
          <Button
            onClick={addSatelliteFormEventHandler}
            buttonTitle={"Add Satellite"}
          />
        </div>
      </Row>
      <Row>
        <Col md={4}>
          <SatelliteListTimeLine
            onRemoveSatellite={useRemoveSatelliteHandler}
            satelliteList={satelliteList}
          />
          <SelectProperty selected={selected} setSelected={setSelected} />
        </Col>
        <Col md={8}>
          <TimeLineGraph
            chartLabelsList={chartLabelsList}
            chartDataList={chartDataList}
            selected={selected}
            satelliteList={satelliteList}
          />
        </Col>
      </Row>
    </ContainerCard>
  );
};
