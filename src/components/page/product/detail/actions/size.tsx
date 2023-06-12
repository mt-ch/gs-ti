import React, { useState } from "react";
import { AvailableSize } from "@/types/product";
import { RadioGroup } from "@headlessui/react";
import classNames from "@/utils/useClassNames";
import { useProductStore } from "@/stores/product";

export interface Props {
  availableSizes: AvailableSize[];
  isLoading?: boolean;
}

export const ProductActionsSize = ({ availableSizes, isLoading }: Props) => {
  const { selectedSize, setSelectedSize } = useProductStore();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-gray-900">Size</h2>
      </div>

      <RadioGroup value={selectedSize} onChange={setSelectedSize}>
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {availableSizes.map((size: AvailableSize) => (
            <RadioGroup.Option
              key={size.id}
              value={size}
              className={({ active, checked }) =>
                classNames(
                  size.inStock ? "cursor-pointer focus:outline-none" : "cursor-not-allowed opacity-25",
                  active ? "ring-2 ring-gray-500 ring-offset-2" : "",
                  checked ? "border-transparent bg-gray-900 text-white hover:bg-black" : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                  "flex items-center justify-center border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                )
              }
              disabled={!size.inStock}
            >
              <RadioGroup.Label as="span">{size.size}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default ProductActionsSize;
