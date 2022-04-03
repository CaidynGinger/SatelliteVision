import React from "react";
import { Col } from "react-bootstrap";

import classes from "./SatelliteCard.module.css";

export const SatelliteCardBlank = (props) => {
  return (
    <Col md={3} onClick={props.showHideForm}>
      <div className={classes.card}>
        <div className={classes.flex_container}>
        <div>
            <ion-icon name="add-circle-outline"></ion-icon>
          </div>
          <div>
            <h3>Add Satellite</h3>
          </div>
        </div>
      </div>
    </Col>
  );
};
