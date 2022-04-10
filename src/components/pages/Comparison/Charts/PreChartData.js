import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ContentCard } from "../../../UI/ContentCard/ContentCard";
import { VelocityChart } from "./VelocityChart/VelocityChart";

export const PreChartData = ({ satelliteList, satelliteDataList }) => {
  return (
    <Row>
      <Col lg={6}>
        <ContentCard>
          <Row>
            <Col lg={7}>
              <VelocityChart
                satelliteList={satelliteList}
                satelliteDataList={satelliteDataList}
              />
            </Col>
            <Col lg={5}>
              <h5>Satellite Velocity km/s</h5>
              <p>
                satellites need to go really fast so that they dont fall down to
                earth thus nearly all satellite will be going around 6-8 km per
                second.
                <br />
                <br />
                find out more{" "}
                <a  href="https://www.esa.int/kids/en/learn/Technology/Mission_control/Space_velocity#:~:text=Satellites%20have%20to%20move%20so,before%20it%20reaches%20the%20ground.">
                  here
                </a>
              </p>
            </Col>
          </Row>
        </ContentCard>
      </Col>
      <Col lg={6}>
        <ContentCard>
          <Row>
            <Col lg={8}>
              <p>chart</p>
            </Col>
            <Col lg={4}>
              <p>aiwdvawdopaw</p>
            </Col>
          </Row>
        </ContentCard>
      </Col>
    </Row>
  );
};
