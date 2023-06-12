import { Product } from "@/types/product";
import React from "react";
// Components
import IndicatorPrice from "@/components/application/indicators/price";
import ProductCardLabel from "@/components/page/product/shared/label";

export interface Props {
  product: Product;
}

export const ProductInfomationHeader = ({ product }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {/* Titles */}
        <h1 className="text-2xl font-medium text-gray-700">{product.title}</h1>
        {/* Price */}
        <p className="text-2xl">
          <IndicatorPrice value={product.price} />
        </p>
        {product.labels ? (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {product.labels?.map((label: string) => (
              <ProductCardLabel key={label} label={label} />
            ))}
          </div>
        ) : null}
        {/* Color */}
        <p className="text-sm text-gray-500">{product.colour}</p>
      </div>
    </div>
  );
};

export default ProductInfomationHeader;
