import { useState } from "react";
import Chart from "react-apexcharts";
function LineChar() {
    const [options, setOptions] = useState({
        chart: {
          id: "line-chart",
        
        },
        colors: ['#FFCC57'],
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
            text: "Total de vendas",
          
          },
      });
    
      const [series, setSeries] = useState([
        {
          name: "Series 1",
          data: [30, 40, 25, 50, 49, 21, 70, 51, 60, 40, 70, 91],
        },
      ]);
  return <Chart options={options} series={series} type="line" />;
}

export default LineChar;
