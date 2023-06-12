import React from "react";

export interface Props {
  productDesciption: string;
}

export const ProductInfomationDescription = ({ productDesciption }: Props) => {
  return (
    <div>
      <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: productDesciption }} />
    </div>
  );
};

export default ProductInfomationDescription;
