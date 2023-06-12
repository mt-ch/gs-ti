import React from "react";
// Stores
import { useProductsStore } from "@/stores/products";
// Components
import Button from "@/components/application/actions/button";

export interface Props {
  numberOfResults: number;
}

const ProductsActionsLoadMore = ({ numberOfResults }: Props) => {
  const { visibleItems, loadMoreItems } = useProductsStore();

  if (visibleItems < numberOfResults)
    return (
      <div className="flex justify-center">
        <div>
          <Button type="button" color="black" variant="solid" onClick={loadMoreItems}>
            Load more
          </Button>
        </div>
      </div>
    );
};

export default ProductsActionsLoadMore;
