import React from "react";

export interface Props {
  sizeInStock: string[] | null;
}

export const ProductCardSizeOverlay = ({ sizeInStock }: Props) => {
  return (
    <div className="absolute bottom-0 left-0 inline-block w-full bg-gray-900 bg-opacity-95 text-white p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
      <p className="text-xs">Sizes</p>
      <p className="text-xs uppercase mt-1">{sizeInStock?.join(", ")}</p>
    </div>
  );
};

export default ProductCardSizeOverlay;
