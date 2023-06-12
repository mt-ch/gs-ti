import React from "react";
import { Product } from "@/types/product";
// Components
import ProductActionsAddToCart from "@/components/page/product/detail/actions/addToCart";
import ProductActionsSize from "@/components/page/product/detail/actions/size";

export interface Props {
  product: Product;
  isLoading?: boolean;
}

export const ProductDetailActions = ({ product, isLoading }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <ProductActionsSize availableSizes={product.availableSizes} />
      <ProductActionsAddToCart />
    </div>
  );
};

export default ProductDetailActions;
