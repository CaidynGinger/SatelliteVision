import React from "react";
import { Col, Row } from "react-bootstrap";

import satelliteIcon from "./UI/SatelliteIcon.svg";

import "./SatelliteListTimeLine.css";
import { SatelliteItem } from "./UI/SatelliteItem";

export const SatelliteListTimeLine = ({ satelliteList, onRemoveSatellite }) => {
  return (
    <div className="satelliteItemListCard">
      <Row>
        <Col md={2}>
          <ion-icon src={satelliteIcon}></ion-icon>
        </Col>
        <Col md={5}>
          <p>Satellite Name</p>
        </Col>
        <Col md={4}>
          <p>Satellite Id</p>
        </Col>
        <Col md={1}></Col>
      </Row>
      <hr />
      <div className="satelliteItemList">
        {satelliteList.map((item, index) => {
          return (
            <SatelliteItem
              key={index}
              onRemoveSatellite={onRemoveSatellite}
              details={item}
            />
          );
        })}
      </div>
    </div>
  );
};
