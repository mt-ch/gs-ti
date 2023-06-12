import { Media } from "@/types/media";

export interface Product {
  id: number;
  sku: string;
  inStock: boolean;
  sizeInStock: string[] | null;
  availableSizes: AvailableSize[];
  handle: string;
  title: string;
  description: string;
  type: string;
  gender: string[];
  fit: string | null;
  labels: string[] | null;
  colour: string;
  price: number;
  compareAtPrice: null;
  discountPercentage: null;
  featuredMedia: Media;
  media: Media[];
  objectID: string;
}

export interface AvailableSize {
  id: number;
  inStock: boolean;
  inventoryQuantity: number;
  price: number;
  size: string;
  sku: string;
}
