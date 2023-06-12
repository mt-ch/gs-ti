import React, { useState } from "react";
// Components
import Button from "@/components/application/actions/button";
// Stores
import { useProductStore } from "@/stores/product";
export interface Props {
  soldOut: boolean;
}

export const ProductActionsAddToCart: React.FC<Props> = ({soldOut}) => {
  const [loading, setLoading] = useState(false);
  const { selectedSize } = useProductStore();
  const handleAddToCart = () => {
    setLoading(true);
    // Similate loading for demo
    setTimeout(() => {
      setLoading(false);
      alert("Added to cart");
    }, 2000);
    // Add to cart logic
  };
  return (
    <form action="#" method="POST" onSubmit={handleAddToCart}>
      <Button type="submit" color="primary" variant="solid" isLoading={loading} disabled={selectedSize === null || soldOut}>
        {!soldOut ? "Add to cart" : "Sold out"}  
      </Button>
    </form>
  );
};

export default ProductActionsAddToCart;
