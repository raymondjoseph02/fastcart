import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface StatBarChart {
  labels: string[];
  data: number[];
  maxColor: string;
  otherColor: string;
}

const StatBarChart: React.FC<StatBarChart> = ({
  labels,
  data,
  maxColor,
  otherColor,
}) => {
  const maxValue = Math.max(...data);
  const backgroundColors = data.map((value) =>
    value === maxValue ? maxColor : otherColor
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1,
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        display: false,
        grid: {
          display: false,
        },
        border: { display: false, dashOffset: 9 },
      },
      y: {
        stacked: true,
        display: false,
        grid: {
          display: false,
        },
        border: { display: false, dashOffset: 9 },
      },
    },
  };

  return (
    <div className="w-fit h-13">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StatBarChart;
