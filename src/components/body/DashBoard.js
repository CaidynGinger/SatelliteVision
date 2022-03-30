import React, { useEffect, useState } from "react";

import "./DashBoard.css";
import axios from "axios";
import getDateData from "../../services/GetDateData";
import SatelliteLanchByYearBarChart from "./BarChartYear/SatelliteLanchByYearBarChart";
import { Col, Container, Row } from "react-bootstrap";
import SpeedOverRevelations from "./SatellitespeedOverRevilutions/SpeedOverRevelutions";
import getScatterData from "./SatellitespeedOverRevilutions/services/ProcessChartData";

const DashBoard = () => {
    const [satelliteData, setSatelliteData] = useState([]);

    useEffect(() => {
      axios
        .get("https://tle.ivanstanojevic.me/api/tle?page-size=100")
        .then((res) => {
          setSatelliteData(res.data.member)
          console.log(res.data)

        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <Col lg={12}>
              <div className="card">
                <SatelliteLanchByYearBarChart tableData={getDateData(satelliteData)}/>
              </div>
            </Col>
            <Col lg={12}>
            <div className="card">
                <SpeedOverRevelations tableData={getScatterData(satelliteData)}/>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
