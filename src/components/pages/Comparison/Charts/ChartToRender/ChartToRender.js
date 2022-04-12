import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const ChartToRender = ({
  satelliteList,
  satelliteDataList,
  chartToRender,
}) => {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    let datasetUseEffectVar = [];
    if (satelliteList.length === 0) {
    } else {
      satelliteDataList.forEach((element) => {
        let satelliteColor = satelliteList.find(
          (i) => i.id === element.tle?.satelliteId
        );
        let dataset = {};
        let dataChangeValueForChart = [];
        if (chartToRender === "velocity") {
          dataChangeValueForChart.push(element.vector.velocity.r);
        } else if (chartToRender === "altitude") {
          dataChangeValueForChart.push(element.geodetic.altitude);
        } else if (chartToRender === "total Revolutions") {
          dataChangeValueForChart.push(
            Math.round(
              (parseFloat(element.tle.line2.slice(63, 68)) + Number.EPSILON) *
                100
            ) / 100
          );
        } else if (chartToRender === "Revolutions per/day") {
          dataChangeValueForChart.push(
            Math.round(
              (parseFloat(element.tle.line2.slice(52, 63)) + Number.EPSILON) *
                100
            ) / 100
          );
        }
        dataset = {
          label: element.tle.name,
          data: dataChangeValueForChart,
          backgroundColor: [satelliteColor.color],
          borderColor: [satelliteColor.color],
          hoverBackgroundColor: "white", //https://www.codegrepper.com/code-examples/javascript/chartjs+bar+chart+hover+color
        };
        datasetUseEffectVar.push(dataset);
      });
    }
    setDatasets(datasetUseEffectVar);
  }, [satelliteDataList, satelliteList, chartToRender]);
  return (
    <div>
      <Bar
        options={{
          indexAxis: "y",
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
            },
            legend: {
              display: true,
            },
          },
        }}
        data={{
          labels: [""],
          datasets: datasets,
        }}
      />
    </div>
  );
};
