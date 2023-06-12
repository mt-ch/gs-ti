import React from "react";
import currency from "currency.js";

export interface Props {
  value: number;
}

export const IndicatorPrice = ({ value }: Props) => {
  return <span className="font-bold text-gray-900"> {currency(value, { precision: 0, symbol: "£" }).format()}</span>;
};

export default IndicatorPrice;
