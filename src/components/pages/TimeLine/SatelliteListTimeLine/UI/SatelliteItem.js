import React from "react";
import { Col, Row } from "react-bootstrap";
import satelliteIcon from "./SatelliteIcon.svg";

import './SatelliteItem.css'


export const SatelliteItem = ({details,onRemoveSatellite}) => {

    const removeItem = () => {
        onRemoveSatellite(details)
    }
  return (
    <Row className="satellite-item">
      <Col md={2}>
        <ion-icon src={satelliteIcon}></ion-icon>
      </Col>
      <Col md={5}>
        <p>{details.name}</p>
      </Col>
      <Col md={4}>
        <p>{details.id}</p>
      </Col>
      <Col className='trash' md={1}>
          <ion-icon onClick={removeItem} name="trash-outline"></ion-icon>
      </Col>
    </Row>
  );
};
