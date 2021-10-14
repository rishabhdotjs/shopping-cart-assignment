import CartView from '../src/components/Cart/CartView';
import { getGrandTotal } from '../src/features/cart/cartSlice';
import { useAppSelector } from '../src/store/store';

export default function CartPage(): JSX.Element {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const itemsAndTotal = useAppSelector(getGrandTotal);

  return (
    <CartView
      cartProducts={cartProducts}
      grandTotal={itemsAndTotal.grandTotal}
      itemsInCart={itemsAndTotal.items}
    />
  );
}
