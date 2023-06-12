import React from "react";
// Stores
import { UseProductsStore } from "@/stores/products";
// Components
import Button from "@/components/application/actions/button";

export interface Props {
  numberOfResults: number;
}

const ProductsActionsLoadMore = ({ numberOfResults }: Props) => {
  const { visibleProducts, loadMoreProducts } = UseProductsStore();

  if (visibleProducts < numberOfResults)
    return (
      <div className="flex justify-center">
        <div>
          <Button type="button" color="black" variant="solid" onClick={loadMoreProducts}>
            Load more
          </Button>
        </div>
      </div>
    );
};

export default ProductsActionsLoadMore;
