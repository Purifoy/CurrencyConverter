// ChartPage.js
import React from "react";
import ExchangeRateChart from "./ExchangeRateChart";
import { historicalData } from "./data"; // Assuming you have historical data

const ChartPage = () => {
  return (
    <div>
      <h1>Exchange Rate Chart</h1>
      <ExchangeRateChart historicalData={historicalData} />
    </div>
  );
};

export default ChartPage;
