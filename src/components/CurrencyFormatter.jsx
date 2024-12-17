import React from "react";
import numeral from "numeral";

const CurrencyFormat = ({ amount, className }) => {
  const formattedAmount = numeral(amount).format("0,0.00");
  return <div className={`${className}`}>${formattedAmount}</div>;
};

export default CurrencyFormat;
