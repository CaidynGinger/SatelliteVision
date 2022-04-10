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

export const VelocityChart = ({ satelliteList, satelliteDataList }) => {
  console.log(satelliteList);
  console.log(satelliteDataList);

  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    let datasetUseEffectVar = [];
    if (satelliteList.length === 0) {
    } else {
      satelliteDataList.forEach((element) => {
        let satelliteColor = satelliteList.find(
          (i) => i.id === element.tle?.satelliteId
        );
        let dataset = {
          label: element.tle.name,
          data: [element.vector.velocity.r],
          backgroundColor: [satelliteColor.color],
          borderColor: [satelliteColor.color],
          hoverBackgroundColor: "white", //https://www.codegrepper.com/code-examples/javascript/chartjs+bar+chart+hover+color
        };
        datasetUseEffectVar.push(dataset)
      });
    }

    setDatasets(datasetUseEffectVar);
  }, [satelliteDataList, satelliteList]);
  return (
    <div>
      <Bar
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
              display: true,
            },
          },
          tooltips: {
            callbacks: {
              // label: function (tooltipItem) {
              //   return tooltipItem + ': awdaw';
              // },
            },
          },
        }}
        data={{
          labels: ["velocity km per second"],
          datasets: datasets,
        }}
      />
    </div>
  );
};
