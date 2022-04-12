import React from "react";
import { Col, Row } from "react-bootstrap";
import { ChartContainer } from "./UI/ChartContainer/ChartContainer";
import { ChartToRender } from "./ChartToRender/ChartToRender";

export const PreChartData = ({ satelliteList, satelliteDataList }) => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <ChartContainer
            satelliteList={satelliteList}
            satelliteDataList={satelliteDataList}
            details={{
              ChartToRender,
              ChartToRenderVal: "velocity",
              header: "Satellite Velocity km/s",
              paragraph:
                "satellites need to go really fast so that they dont fall down to earth thus nearly all satellite will be going around 6-8 km per second.",
              anchorLink:
                'https://www.esa.int/kids/en/learn/Technology/Mission_control/Space_velocity#:~:text=Satellites%20have%20to%20move%20so,before%20it%20reaches%20the%20ground."',
            }}
          />
        </Col>
        <Col lg={6}>
          <ChartContainer
            satelliteList={satelliteList}
            satelliteDataList={satelliteDataList}
            details={{
              ChartToRender,
              ChartToRenderVal: "altitude",
              header: "Satellite Altitude km",
              paragraph:
                "human-made satellites are typically located in one of three popular orbital regimes: low Earth orbit (LEO), medium Earth orbit (MEO), and geosynchronous orbit (GEO).",
              anchorLink:
                "https://aerospace.csis.org/aerospace101/popular-orbits-101/#:~:text=The%20majority%20of%20satellites%20orbiting,full%20orbit%20around%20the%20Earth.",
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={6}>
          <ChartContainer
            satelliteList={satelliteList}
            satelliteDataList={satelliteDataList}
            details={{
              ChartToRender,
              ChartToRenderVal: "total Revolutions",
              header: "Satellite's Total Revolutions",
              paragraph:
                "Here you can see the different total revolutions of each satellite",
            }}
          />
        </Col>
        <Col lg={6}>
          <ChartContainer
            satelliteList={satelliteList}
            satelliteDataList={satelliteDataList}
            details={{
              ChartToRender,
              ChartToRenderVal: "Revolutions per/day",
              header: "Revolutions per/day",
              paragraph:
                "A satellites Revolutions per/day is directly linked to the satellites velocity and so most satellites will be going around the earth around the same speed",
              anchorLink:
                'https://www.esa.int/kids/en/learn/Technology/Mission_control/Space_velocity#:~:text=Satellites%20have%20to%20move%20so,before%20it%20reaches%20the%20ground."',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};
