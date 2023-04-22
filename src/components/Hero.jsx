import React from "react";
import  ReactDOM  from "react-dom/client";
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
import {useFaker} from 'react-fakers';
import faker from 'faker'
import "../styles/Chart.css"
import CustomTooltip from "./CustomTooltip";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Hero = ({START_DATE, END_DATE, allData}) => {
  const allAsteroidData = allData.near_earth_objects;
  const dates = Object.keys(allAsteroidData);
  dates.sort();
  const arrayLengths = dates.map(date => allAsteroidData[date].length);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: (tooltipModel) => {
          const {chart, tooltip} = tooltipModel;
          const tooltipEl = document.getElementById('chartjs-tooltip');
          const root = ReactDOM.createRoot(tooltipEl);
          root.render(<CustomTooltip 
            chart = {chart}
            tooltip = {tooltip}
            allAsteroidData = {allAsteroidData}
            dates = {dates}
          />);

          return '';
        }
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [];
  
  for (let i = (new Date(START_DATE)).getDate(); i <= (new Date(END_DATE)).getDate(); i++) {
    labels.push(i);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Asteroid chart",
        data: arrayLengths, 
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div id="chart">
      <Line options={options} data={data} /> 
      <div id="chartjs-tooltip"></div>
    </div>
  )
}

export default Hero