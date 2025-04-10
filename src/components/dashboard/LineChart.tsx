import { Card, CardBody } from "@material-tailwind/react";
import theme from "@material-tailwind/react/theme";
import Chart from "react-apexcharts";
// import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "line",
  height: 297,
  series: [
    {
      name: "May 20",
      data: [0, 40, 30, 20, 70, 50, 20, 20, 90, 23, 10],
    },
    {
      name: "May 21",
      data: [50, 40, 30, 32, 50, 35, 25, 15, 20, 20, 50],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },
    colors: ["#1E5EFF", "#D9E1EC"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#A1A7C4",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
          paddingTop: "20px",
        },
      },
      categories: [
        "4am",
        "5am",
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
      ],
    },
    yaxis: {
      min: 0,
      labels: {
        style: {
          colors: "#A1A7C4",
          fontSize: "12px",
          foDntFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#E6E9F4",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },

    tooltip: {
      style: {},
      theme: "dark",
    },
  },
};

export default function LineChat() {
  return (
    <Card className="shadow-none p-0 ">
      <CardBody className=" shadow-none ">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
