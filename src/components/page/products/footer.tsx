import React from "react";
import ProductsActionsLoadMore from "@/components/page/products/actions/loadMore";

export interface Props {
  visibleResults: number;
  numberOfResults: number;
}

const ProductsFooter = ({ numberOfResults, visibleResults }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <p className="text-sm tracking-tight text-gray-500">
          Viewing 1 - {visibleResults} of {numberOfResults} products
        </p>
      </div>
      <ProductsActionsLoadMore numberOfResults={numberOfResults} />
    </div>
  );
};

export default ProductsFooter;
