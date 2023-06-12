import { products } from "@/data/products.data";
import { Product } from "@/types/product";
import { ProductDetailPageProps } from "@/utils/pages/products";

export const getAllProducts = async (): Promise<Product[]> => {
  // Simulate loading
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return products;
};

export const getProductById = async (id: number): Promise<ProductDetailPageProps | null> => {
  // Simulate loading
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const product = products.find((product) => product.id === id) || null;
  const recommended = getRecomendedProducts(products, 4, product);

  return { product, recommended };
};

const getRecomendedProducts = (products: Product[], count: number, selectedProduct: Product | null): Product[] => {
  const remainingProducts = products.filter((product) => product.id !== selectedProduct?.id);
  const shuffled = remainingProducts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
