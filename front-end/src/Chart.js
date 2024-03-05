/*import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ExchangeRateChart = ({ historicalData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      new Chart(ctx, {
        type: "line",
        data: {
          labels: historicalData.labels,
          datasets: [
            {
              label: "Exchange Rate Trends",
              data: historicalData.data,
              borderColor: "#00bcd4",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: "linear",
              position: "bottom",
            },
          },
        },
      });
    }
  }, [historicalData]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200" />
    </div>
  );
};

export default ExchangeRateChart;
*/