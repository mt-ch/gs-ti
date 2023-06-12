import React from "react";
import Image from "next/image";
import currency from "currency.js";
// Types
import { Product } from "@/types/product";
// Components
import ProductCardSizeOverlay from "@/components/page/product/shared/sizeOverlay";
import ProductCardLabel from "@/components/page/product/shared/label";

export interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const soldOut = product.availableSizes.every((item) => !item.inStock);

  return (
    <div key={product.id} className={`group relative ${soldOut ? "opacity-50" : null}`}>
      <div className="relative overflow-hidden">
        <div className="relative aspect-[1692/2018] w-full bg-gray-200">
          <Image src={product.featuredMedia.src} alt="Description of the image" className="gs-img -lazyloaded" fill loading="lazy" />
        </div>
        {/* Sizes */}
        {!soldOut ? <ProductCardSizeOverlay sizeInStock={product.sizeInStock} /> : null}
      </div>

      <div className="mt-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700">
            <a href={`/products/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.colour}</p>
        </div>
        <p className="mt-1 text-sm font-bold text-gray-900">{currency(product.price, { precision: 0, symbol: "£" }).format()}</p>
        {product.labels ? (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {product.labels?.map((label: string) => (
              <ProductCardLabel key={label} label={label} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
