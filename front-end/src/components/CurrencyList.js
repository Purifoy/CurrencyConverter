// CurrencyList.js
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
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
