import React from "react";
import { Row } from "react-bootstrap";
import { SatelliteCard } from "./UI/SatelliteCard";
import { SatelliteCardBlank } from "./UI/SatelliteCard_Blank";

export const SatelliteList = ({satelliteList ,onClick, onRemoveSatellite}) => {
  return (
    <Row>
      {(satelliteList.length !== 4) ? (
        <SatelliteCardBlank onClick={onClick}/>
      ) : null}
      {satelliteList.map((item, index) => {
        return (
          <SatelliteCard
            // satelliteDataHandler={props.satelliteDataHandler}
            key={index}
            name={item.name}
            id={item.id}
            onRemoveSatellite={onRemoveSatellite}
          />
        );
      })}
    </Row>
  );
};
