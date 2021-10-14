import { CartProduct } from './cartSlice';

export async function addToCartAPI(
  payload: CartProduct
): Promise<{
  response: string;
  responseMessage: string;
  product: CartProduct;
}> {
  const response = await fetch('/api/addToCart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();

  return result;
}
