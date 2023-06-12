import { NextApiRequest, NextApiResponse } from "next";
import { getAllProducts } from "@/pages/api-helpers/products";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const products = await getAllProducts();
  res.status(200).json(products);
}
