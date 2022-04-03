import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { BarChart } from "./Charts/BarChart/BarChart";
import { BarChartWithClassification } from "./Charts/BarChartClassification/BarChartWithClassification";

import { SatelliteVisualization } from "./SatelliteVisualization/SatelliteVisualization.js";

import classes from "./Dashboard.module.css";
import { PageHeader } from "../../UI/PageHeader/PageHeader";
import { ContainerCard } from "../../UI/ContainerCard/ContainerCard";

export const DashBoard = () => {
  const data = useOutletContext();

  // console.log(data)
  return (
    <ContainerCard>
      <PageHeader
        pageDetail = {{
          header:"Dashboard",
          subHeading: "Here you can see that statistics of 100 of the most popular satellites",
        }}
        />
        <br></br>
      <Row>
        <Col className={classes.half_colum} md={6}>
          <Col className={classes.card_container} md={12}>
            <div className={classes.card}>
              <BarChart data={data} />
            </div>
          </Col>
          <br></br>
          <Col className={classes.card_container} md={12}>
            <div className={classes.card}>
              <BarChartWithClassification data={data} />
            </div>
          </Col>
        </Col>
        <Col className={classes.half_colum} md={6}>
          <Col className={classes.card_container} md={12}>
            <div className={[classes.card_map]}>
              <SatelliteVisualization data={data} />
            </div>
          </Col>
        </Col>
      </Row>
    </ContainerCard>
  );
};
