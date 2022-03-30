import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import MakeListUnique from '../../../services/MakeListUnique';
import CountSimilarItems from '../../../services/CountSimilarItems';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SatelliteLanchByYearBarChart = (props) => {
  
  const labels = MakeListUnique(props.tableData)

  const data = CountSimilarItems(props.tableData)


  return (
    <div className="bar-chart-container">
      <Bar
        options={{
          plugins: {
            title: { display: true, text: ["Number of satellites launched each year"] },
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
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: "#5352ed",
              borderColor: "#5352ed",
              hoverBackgroundColor: "#130f40", //https://www.codegrepper.com/code-examples/javascript/chartjs+bar+chart+hover+color
            },
          ],
        }}
      />
    </div>
  )
}

export default SatelliteLanchByYearBarChart