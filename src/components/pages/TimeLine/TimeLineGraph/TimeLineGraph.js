import React, { useEffect, useState } from "react";

import classes from "./TimeLineGraph.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        color: "white",
      },
    },
    y: {
      ticks: {
        color: "white",
      },
    },
  },
  plugins: {
    title: {
      color: "white",
      display: true,
      text: ["Satellite's data over the past 10 Months"],
    },
    legend: {
      position: "bottom",
      display: true,
    },
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem) {
        return tooltipItem.yLabel;
      },
    },
  },
};

export const TimeLineGraph = ({
  chartLabelsList,
  chartDataList,
  selected,
  satelliteList,
}) => {
  const [datasets, setDatasets] = useState([]);
  useEffect(() => {
    let dataSet = [];
    let dataSetForProcessing = [];

    satelliteList.forEach((element) => {
      let data = chartDataList.filter((item) => {
        if (item.tle.satelliteId === element.id) {
          return element;
        }
      });
      let dataToBeAppended = {
        satelliteId: element.id,
        data: data,
        name: element.name,
        color: element.color,
      };
      dataSetForProcessing.push(dataToBeAppended);
    });
    if (dataSetForProcessing.length !== 0) {
      dataSetForProcessing.forEach((element) => {
        let data = element.data.map((item) => {
          if (selected === "altitude") {
            return item.geodetic.altitude;
          } else if (selected === "velocity") {
            return item.vector.velocity.r;
          } else if (selected === "latitude") {
            return item.geodetic.latitude;
          } else if (selected === "longitude") {
            return item.geodetic.longitude;
          }
          return console.log("error ");
        });
        let dataSetItem = {
          label: element.name,
          data: data,
          borderColor: element.color,
          backgroundColor: element.color,
        };
        dataSet.push(dataSetItem);
      });
    }
    setDatasets(dataSet);
  }, [satelliteList, chartDataList, selected]);

  console.log(datasets);

  const data = {
    labels: chartLabelsList,
    datasets: datasets,
  };
  return (
    <div className={classes.chart_card}>
      <Line options={options} data={data} />
    </div>
  );
};
