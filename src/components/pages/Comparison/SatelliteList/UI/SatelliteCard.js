import React from "react";
import { Col, Row } from "react-bootstrap";

import classes from "./SatelliteCard.module.css";

import img from "./Resources/Sat 2.svg";

export const SatelliteCard = ({ name, id, onRemoveSatellite }) => {
  return (
    <Col md={3}>
      <Row className={classes.card}>
        <Col lg={3}>
          <ion-icon src={img}></ion-icon>
        </Col>
        <Col lg={6}>
          <h3>{name}</h3>
          <p>Satellite Id: {id}</p>
        </Col>
        <Col className={classes.trash} lg={3}>
          <div onClick={onRemoveSatellite}>
            <ion-icon name="trash-outline"></ion-icon>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
