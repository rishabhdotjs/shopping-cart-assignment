import { toast } from 'react-toastify';
import { CartProduct } from './cartSlice';

export async function addToCartAPI(payload: CartProduct): Promise<{
  response: string;
  responseMessage: string;
  product: CartProduct;
}> {
  const response = await toast.promise(
    fetch('/api/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }),
    {
      pending: 'Adding product to cart...',
      success: `${payload.name} added in cart 👌`,
      error:
        'Product could not be added into cart due to some technical issue 🤯',
    },
    {
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  );
  const result = await response.json();

  return result;
}
