import React from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = (START_DATE, END_DATE) => {
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [];
  
  for (let i = START_DATE; i < END_DATE; i++) {
    labels.push(i);
  }
  
  const data = {
    labels,
    datasets: [
      {
        label: "Asteroid chart",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 3 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Line options={options} data={data} />
  )
}

export default Chart