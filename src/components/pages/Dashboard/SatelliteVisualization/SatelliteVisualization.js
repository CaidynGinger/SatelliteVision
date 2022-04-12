import React from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import classes from "./SatelliteVisualization.module.css";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Marker } from "react-simple-maps";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const SatelliteVisualization = ({ data }) => {
  var satellite = require("satellite.js");

  console.log(data);

  data = data.slice(0,20)

  // making labels

  let labelsList = data.map((item) => {
    return item.name;
  });

  // making labels

  //making datalist

  let colorsList = data.map(() => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  });

  const markersList = data.map((item) => {
     let satrec = satellite.twoline2satrec(
      item.line1,
      item.line2
    );

    let date = new Date();
    let positionAndVelocity = satellite.propagate(satrec, date);
    let gmst = satellite.gstime(date);
    let position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

    return {
      markerOffset: -15,
      name: item.name,
      coordinates: [position.latitude * 180 / Math.PI, (position.longitude * 180 / Math.PI)],
    };
    // { markerOffset: -15, name: "La Paz", coordinates: [-68.1193, -16.4897] }
  });

  console.log(markersList)

  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  return (
    <div className={classes.chart_container}>
      <h6>Locations of 20 Satellites</h6>
      <ComposableMap>
        <Geographies className={classes.chart_container} geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markersList.map(({ name, coordinates, markerOffset }, index) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={5} fill={colorsList[index]} />
            <text
              textAnchor="middle"
              y={markerOffset}
              style={{ fontFamily: "system-ui", fill: "white" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};
