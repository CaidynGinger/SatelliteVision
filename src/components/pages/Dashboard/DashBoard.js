import React from "react";
import { Col, Row } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import { BarChart } from "./Charts/BarChart/BarChart";
import { BarChartWithClassification } from "./Charts/BarChartClassification/BarChartWithClassification";

import { SatelliteVisualization } from "./SatelliteVisualization/SatelliteVisualization.js";

import classes from "./Dashboard.module.css";
import { PageHeader } from "../../UI/PageHeader/PageHeader";
import { ContainerCard } from "../../UI/ContainerCard/ContainerCard";
import { ContentCard } from "../../UI/ContentCard/ContentCard";

export const DashBoard = () => {
  const data = useOutletContext();
  return (
    <ContainerCard>
      <PageHeader
        pageDetail={{
          header: "Dashboard",
          subHeading:
            "Here you can see that statistics of 100 of the most popular satellites",
        }}
      />
      <Row>
        <Col className={classes.half_colum} md={6}>
          <br/>
          <Col className={classes.card_container} md={12}>
            <ContentCard>
              <BarChart data={data} />
            </ContentCard>
          </Col>
          <Col className={classes.card_container} md={12}>
          <br/>

          <ContentCard>
              <BarChartWithClassification data={data} />
              </ContentCard>
          </Col>
        </Col>
        <Col className={classes.half_colum} md={6}>
        <br/>

          <Col className={classes.card_container} md={12}>
          <ContentCard>
              <SatelliteVisualization data={data} />
              </ContentCard>
          </Col>
        </Col>
      </Row>
    </ContainerCard>
  );
};
