import React from "react";

export interface Props {
  heading: string;
  text: string;
  numberOfResults: number;
  isLoading?: boolean;
}

const ProductsHeader = ({ heading, text, numberOfResults, isLoading }: Props) => {
  return (
    <div className="max-w-2xl">
      <div className="flex items-end gap-4">
        <h2 className="text-xl font-bold tracking-tight leading-tight uppercase text-gray-900">{heading}</h2>
        <p className="text-sm tracking-tight text-gray-400">{numberOfResults} results</p>
      </div>
      <p className="text-sm tracking-tight text-gray-500 mt-2">{text}</p>
    </div>
  );
};

export default ProductsHeader;
