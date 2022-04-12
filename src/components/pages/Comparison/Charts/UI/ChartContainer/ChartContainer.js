import React from "react";
import { Col, Row } from "react-bootstrap";
import { ContentCard } from "../../../../../UI/ContentCard/ContentCard";
import classes from './ChartContainer.module.css'

export const ChartContainer = ({
  details,
  satelliteList,
  satelliteDataList,
}) => {
  return (
    <ContentCard>
      <Row>
      <Col lg={7}>
        <details.ChartToRender
          satelliteList={satelliteList}
          satelliteDataList={satelliteDataList}
          chartToRender={details.ChartToRenderVal}
        />
      </Col>
      <Col lg={5} className={classes.p}>
        <h5>{details.header}</h5>
        <p >
          {details.paragraph}
          <br />
          <br />
          {details.anchorLink ? (
            <>
              Find out more <a href={details.anchorLink}>here</a>
            </>
          ) : null}
        </p>
      </Col>
    </Row>
    </ContentCard>
    
  );
};
