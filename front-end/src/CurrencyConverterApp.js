// YourComponent.js
import React, { useState } from 'react';
import { currency } from './currency';

const CurrencyConverterApp = () => {
  // State to manage user inputs and selected currencies
  const [amount1, setAmount1] = useState('');
  const [currency1, setCurrency1] = useState('usd');
  const [amount2, setAmount2] = useState('');
  const [currency2, setCurrency2] = useState('eur');

  // Conversion function (you might have a separate utility for this)
  const convertCurrency = () => {
    // Perform your currency conversion logic here
    // For simplicity, this example assumes a 1:1 conversion
    const convertedAmount = parseFloat(amount1) || 0;
    setAmount2((convertedAmount).toFixed(2));
  };

  // Event handlers for input and select changes
  const handleAmount1Change = (event) => setAmount1(event.target.value);
  const handleCurrency1Change = (event) => setCurrency1(event.target.value);
  const handleAmount2Change = (event) => setAmount2(event.target.value);
  const handleCurrency2Change = (event) => setCurrency2(event.target.value);

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <div className="CurrencyInput">
        <div className="input-container">
          <label className="label">Amount</label>
          <input
            type="number"
            value={amount1}
            onChange={handleAmount1Change}
          />
        </div>

        <div className="input-container">
          <label className="label">Currency</label>
          <select
            value={currency1}
            onChange={handleCurrency1Change}
          >
            {currency.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={convertCurrency}>Convert</button>

      <div className="CurrencyInput">
        <div className="input-container">
          <label className="label">Converted Amount</label>
          <input
            type="text"
            value={amount2}
            onChange={handleAmount2Change}
            readOnly
          />
        </div>

        <div className="input-container">
          <label className="label">Currency</label>
          <select
            value={currency2}
            onChange={handleCurrency2Change}
          >
            {currency.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverterApp;
