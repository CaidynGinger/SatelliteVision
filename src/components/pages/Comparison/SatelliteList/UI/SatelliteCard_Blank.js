import React from "react";
import { Col, Row } from "react-bootstrap";

import classes from "./SatelliteCard.module.css";

export const SatelliteCardBlank = ({ onClick }) => {
  return (
    <Col md={3} onClick={onClick}>
      <Row className={classes.card}>
        <Col lg={4}>
          <ion-icon name="add-circle-outline"></ion-icon>
        </Col>
        <Col lg={8}>
            <h3>Add Satellite</h3>
        </Col>
      </Row>
    </Col>
  );
};
