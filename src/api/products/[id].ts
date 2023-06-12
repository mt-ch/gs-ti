// import { NextApiRequest, NextApiResponse } from 'next';
// import { getProductById } from '@/pages/api-helpers/products';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { id } = req.query;
//   const product = await getProductById(Number(id));
//   if (product) {
//     res.status(200).json(product);
//   } else {
//     res.status(404).json({ message: 'Product not found' });
//   }
// }