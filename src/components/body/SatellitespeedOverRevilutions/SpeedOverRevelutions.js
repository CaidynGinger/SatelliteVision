import React from "react";
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

const SpeedOverRevelations = (props) => {
  const chartDate = props.tableData;

  let labelsList = [];

  chartDate.forEach((element) => {
    labelsList.push(element.name);
  });

  let dataList = [];

  chartDate.forEach((element) => {
    dataList.push({
      x: element.meanMotion,
      y: element.revolutionNumber,
    });
  });
  let colorsList = chartDate.map(() => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }); // cleaner code

  console.log(dataList);
  console.log(labelsList);

  let data = {
    datasets: [
      {
        label: "Legend",
        labels: labelsList,
        data: dataList,
        backgroundColor: colorsList,
        hoverBackgroundColor: colorsList,
        borderColor: colorsList,
      },
    ],
  };

  console.log(props.tableData);

  return (
    <div>
      <Scatter
        options={{
          plugins: {
            title: { display: true, text: ["Satellite revolutions over revelations per day"] },
            legend: {
              display: false, //https://www.codegrepper.com/code-examples/javascript/chartjs+hide+labels
            },
            labels: {
              display: true,
            },
            tooltip: {
              callbacks: {
                label: function (ctx) {
                  // console.log(ctx);
                  let label = ctx.dataset.labels[ctx.dataIndex];
                  label +=
                    " | Revelations per day " +
                    ctx.parsed.x +
                    " | Total Revolutions " +
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
              title: {
                display: true, //https://www.chartjs.org/docs/3.0.2/axes/labelling.html
                text: "Total Revolutions",
              },
            },
            x: {
              // battles
              title: {
                display: true,
                text: "Revelations per day",
              },
            },
          },
        }}
        data={data}
      />
    </div>
  );
};

export default SpeedOverRevelations;
