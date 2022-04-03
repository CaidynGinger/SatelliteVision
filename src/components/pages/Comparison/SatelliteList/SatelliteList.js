import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { SatelliteCard } from "./UI/SatelliteCard";
import { SatelliteCardBlank } from "./UI/SatelliteCard_Blank";

export const SatelliteList = (props) => {

  const [satList, setSatList] = useState(props.satelliteList) 
  const [cardSatList, setCardSatList] = useState([]) 

  useEffect(()=> {
    setCardSatList(satList)
  }, [satList]);

  const [satelliteDataHandler, setSatelliteDataHandler] = useState(props.satelliteDataHandler) 
  const [satelliteDataHandlerObservable, setSatelliteDataHandlerObservable] = useState([]) 

  useEffect(() => {
    setSatelliteDataHandlerObservable(satelliteDataHandler)
  },[satelliteDataHandler])
  
  const numberOfSatelliteSelected = cardSatList.length;

  let showAddSatelliteButton = true;

  if (numberOfSatelliteSelected === 4) {
    showAddSatelliteButton = false;
  } else {
  }


  return (
    <Row>
      {showAddSatelliteButton ? (
        <SatelliteCardBlank showHideForm={props.showHideForm} />
      ) : null}
      {cardSatList.map((item,index) => {
        return <SatelliteCard satelliteDataHandler={props.satelliteDataHandler} key={index} name={item.name} id={item.id}/>;
      })}
    </Row>
  );
};
