import React from "react";

export interface Props {
  label: string;
}

type Label = {
  text?: string;
  color?: string;
};

const getLabelData = (key: string): Label => {
  switch (key) {
    case "new":
      return { text: "New", color: "bg-red-100" };
    case "going-fast":
      return { text: "Going Fast", color: "bg-orange-100" };
    case "limited-edition":
      return { text: "Limted Edition", color: "bg-blue-100" };
    case "popular":
      return { text: "Popular", color: "bg-yellow-100" };
    case "recycled-nylon":
      return { text: "Recycled Nylon", color: "bg-green-100" };
    case "recycled-polyester":
      return { text: "Recycled Polyester", color: "bg-green-100" };
    default:
      return { text: undefined, color: undefined };
  }
};

export const ProductCardLabel: React.FC<Props> = ({ label }) => {
  const { text, color } = getLabelData(label);

  return <span className={`text-xs px-2 py-1 font-medium break-keep ${color}`}>{text}</span>;
};

export default ProductCardLabel;
