import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = () => {
  const [options, setOptions] = React.useState({
    chart: {
      id: "column-chart",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    title: {
      text: "Vendas na semana",
    
    },
  });

  const [series, setSeries] = React.useState([
    {
      name: "Series 1",
      data: [30, 40, 25, 50, 49, 21, 70, 51, 60, 40, 70, 91],
    },
  ]);

  return <Chart options={options} series={series} type="bar" />;
};

export default ColumnChart;
