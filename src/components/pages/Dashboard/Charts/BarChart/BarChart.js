import React from "react";

import classes from "./BarChart.module.css";

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

export const BarChart = ({ data }) => {
  let dateData = data.map((item) => {
    let itemDate = parseInt(item.line1.slice(9, 11));
    if (itemDate < 22) {
      itemDate = itemDate + 2000;
    } else {
      itemDate = itemDate + 1900;
    }
    return itemDate;
  });
  const min = Math.min(...dateData);
  const max = Math.max(...dateData);

  let dateLabels = [];

  for (let index = 0; index < max + 1 - min; index++) {
    dateLabels.push(min + index);
  }

  let chartData = [];

  dateLabels.forEach((element) => {
    let filteredDate = dateData.filter((item) => {
      return item === element;
    });
    chartData.push(filteredDate.length);
  });

  return (
    <div className={classes.chart_container}>
      <Line
        options={{
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
              text: ["Satellites Launched Each Year"],
            },
            legend: {
              display: false,
            },
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.yLabel;
              },
            },
          },
        }}
        data={{
          labels: dateLabels,
          datasets: [
            {
              data: chartData,
              backgroundColor: "rgb(181, 52, 113)",
              borderColor: "rgba(181, 52,113 , 0.5)",
              hoverBackgroundColor: "white", //https://www.codegrepper.com/code-examples/javascript/chartjs+bar+chart+hover+color
            },
          ],
        }}
      />
    </div>
  );
};
