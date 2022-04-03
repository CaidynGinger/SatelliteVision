import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col } from "react-bootstrap";

import classes from "./SatelliteCard.module.css";

export const SatelliteCard = (props) => {

  const [data, setData] = useState([]) 

  useEffect(() => {
    axios
      .get("https://tle.ivanstanojevic.me/api/tle/"+ props.id +"/propagate")
      .then((res) => {
        console.log('got satellite')
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[props.id]);

  props.satelliteDataHandler(data) 



  return (
    <Col md={3}>
      <div className={classes.card}>
        <div className={classes.flex_container}>
        <div>
          <ion-icon className={classes.selectedSatellite} src={props.image}></ion-icon>
          </div>
          <div>
            <h3>Satellite name: {props.name}</h3>
            <p>satellite id: {props.id}</p>
          </div>
        </div>
      </div>
    </Col>
  )
}
