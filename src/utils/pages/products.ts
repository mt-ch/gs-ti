import { Product } from "@/types/product";

export interface ProductsPageProps {
  products: Product[];
}

export interface ProductDetailPageProps {
  product: Product | null;
  recommended?: Product[];
}
