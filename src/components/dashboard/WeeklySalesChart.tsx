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

const WeeklySalesChart: React.FC = () => {
  const labels = ["12", "13", "14", "15", "16", "17", "18"];
  const data = [2500, 500, 1500, 2525, 3000, 2000, 4500];

  const backgroundColors = data.map(() => "#1FD286");

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
        barPercentage: 0.5,
        // categoryPercentage:0.5
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            // Dynamically display the tooltip value
            return `$${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        border: { display: false },
      },
      y: {
        stacked: true,
        display: false,

        grid: {
          display: false,
        },
        border: { display: false },
      },
    },
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-full min-h-[250px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default WeeklySalesChart;
