import React from "react";

import classes from "./BarChartWithClassification.module.css";

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export const BarChartWithClassification = ({ data }) => {
  console.log(data);

  // making labels

  let labelsList = data.map((item) => {
    return item.name;
  });

  // making labels

  //making datalist

  let dataList = data.map((item) => {
    return {
      x: parseFloat(item.line2.slice(63, 68)),
      y: parseFloat(item.line2.slice(52, 63)),
    };
  });
  //making datalist

  // colors
  let colorsList = dataList.map(() => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
  // colors

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

  let dataForChart = {
    datasets: [
      {
        label: "Legend",
        labels: labelsList,
        data: dataList,
        backgroundColor: colorsList,
        hoverBackgroundColor: colorsList,
        borderColor: colorsList,
        // pointRadius: pointRadiusSizeList,
        // pointHoverRadius: pointRadiusSizeList,
      },
    ],
  };

  return (
    <div className={classes.chart_container}>
      <Scatter
        options={{  
                    
          plugins: {
            legend: {
              display: false, //https://www.codegrepper.com/code-examples/javascript/chartjs+hide+labels
            },
            title: {
              color: "white",
              display: true,
              text: ["Satellites Launched Each Year"],
            },
            labels: {
              display: true,
            },
            tooltip: {
              callbacks: {
                label: function (ctx) {
                  let label = ctx.dataset.labels[ctx.dataIndex];
                  label +=
                    " | Revelations Per Day " +
                    ctx.parsed.x +
                    " | Total Revelations " +
                    ctx.parsed.y +
                    "|";
                  return label;
                },
              },
            },
          },
          scales: {
            y: {
              // wn8
              // suggestedMin: 300,
              // suggestedMax: 2000,
              title: {
                display: true, //https://www.chartjs.org/docs/3.0.2/axes/labelling.html
                text: "Total Revelations",
                color: 'white'
              },
              ticks: {
                color: "white",
              },
              
            },
            x: {
              // battles
              // suggestedMin: 1000,
              // suggestedMax: 20000,
              title: {
                display: true,
                text: "Revelations Per Day",
                color: "white",
              },
              ticks: {
                color: "white",
              },
            },
          },
        }}
        data={dataForChart}
      />
    </div>
  );
};
