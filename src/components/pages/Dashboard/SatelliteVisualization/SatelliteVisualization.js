import React from "react";
import { Scatter } from "react-chartjs-2";

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
  // https://dev.to/omar4ur/create-a-satellite-tracker-from-scratch-in-30-lines-of-javascript-32gk
  var satellite = require("satellite.js");
  // const ISS_TLE = `1 25544U 98067A   21122.75616700  .00027980  00000-0  51432-3 0  9994
  //    2 25544  51.6442 207.4449 0002769 310.1189 193.6568 15.48993527281553`;
  // Initialize the satellite record with this TLE
  // const satrec = satellite.twoline2satrec(
  //   ISS_TLE.split("\n")[0].trim(),
  //   ISS_TLE.split("\n")[1].trim()
  // );
  // Get the position of the satellite at the given date
  // const date = new Date();
  // const positionAndVelocity = satellite.propagate(satrec, date);
  // const gmst = satellite.gstime(date);
  // const position = satellite.eciToGeodetic(positionAndVelocity.position, gmst);

  // console.log(position.longitude); // in radians
  // console.log(position.latitude); // in radians
  // console.log(position.height); // in km

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
  //making datalist


  // let classificationData = data.map((item) => {
  // let itemClassification = item.line1.slice(13, 17);
  // return itemClassification;
  // });

  // console.log(classificationData);
  //   const min = Math.min(...dateData);
  //   const max = Math.max(...dateData);

  //   let dateLabels = [];

  //   for (let index = 0; index < max + 1 - min; index++) {
  //     dateLabels.push(min + index);
  //   }

  //   let chartData = [];

  //   dateLabels.forEach((element) => {
  //     let filteredDate = dateData.filter((item) => {
  //       return item === element;
  //     });
  //     chartData.push(filteredDate.length);
  //   });

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
