// CurrencyList.js
import React from 'react';

const CurrencyList = ({ currencies }) => {
  return (
    <div>
      <h2>Currency List</h2>
      <ul>
        {Object.entries(currencies).map(([currencyCode, exchangeRate]) => (
          <li key={currencyCode}>{`${currencyCode} - ${exchangeRate}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
