import React from "react";
// Components
import ProductCard from "../shared";
// Types
import { Product } from "@/types/product";

export interface Props {
  products?: Product[];
}

export const ProductDetailRelated = ({ products }: Props) => {
  return (
    <section aria-labelledby="recomended-products">
      <h2 id="recomended-products" className="text-xl font-bold  leading-tight uppercase text-gray-900">
        Recomended
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductDetailRelated;
