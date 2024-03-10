// CurrencyList.js
import React from 'react';

const CurrencyList = ({ currencies }) => {
  return (
    <div>
      <h2>Currency List</h2>
      <ul>
        {currencies.map((currency) => (
          <li key={currency.value}>{`${currency.label} - ${currency.value}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
