import type { NextApiHandler } from 'next';
import { CartProduct } from '../../src/features/cart/cartSlice';

const addToCartHandler: NextApiHandler = async (request, response) => {
  const { id, sku, qty, price, name, imageURL }: CartProduct = request.body;

  // simulate IO latency
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!id || !sku || !qty || !price || !name || !imageURL)
    return response.status(400).send({
      response: 'failure',
      responseMessage: 'Parameters are incorrect',
    });

  response.status(201).json({
    response: 'Success',
    responseMessage: 'Product added to cart successfully',
    product: {
      id,
      sku,
      qty,
      price,
      name,
      imageURL,
    },
  });
};

export default addToCartHandler;
