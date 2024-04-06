// CurrencyConverterApp.js
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import CurrencyList from "./CurrencyList";

import CurrencyInput from "./CurrencyInput";

const CurrencyConverterApp = () => {
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);
  const [currencyList, setCurrencyList] = useState([]); // State to hold currency list

  useEffect(() => {
    axios.get('https://v6.exchangerate-api.com/v6/7b7fb6b4caf4eaa80cfb2775/latest/USD')
      .then(response => {
        setRates(response.data.conversion_rates);
        setCurrencyList(response.data.conversion_rates);
      });
  }, []);

  const format = (number) => {
    return number.toFixed(4);
  };

  const handleAmount1Change = useCallback((amount1) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }, [rates, currency1, currency2]);

  const handleCurrency1Change = (currency1) => {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amount2) => {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  };

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyInput
        onAmountChange={handleAmount1Change}
        onCurrencyChange={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amount1}
        currency={currency1}
      />
      <CurrencyInput
        onAmountChange={handleAmount2Change}
        onCurrencyChange={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amount2}
        currency={currency2}
      />
      <CurrencyList currencies={currencyList} />
    </div>
  );
};

export default CurrencyConverterApp;
