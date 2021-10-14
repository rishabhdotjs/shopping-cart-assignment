import Image from 'next/image';
import {
  CartProduct,
  deleteItemFromCart,
  updateItemInCart,
} from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../store/store';
import Button from '../elements/Button';
import CartCard from './CartCard';

export default function CartView({
  cartProducts,
  grandTotal,
  itemsInCart,
}: {
  cartProducts: {
    [key: string]: CartProduct;
  };
  grandTotal: number;
  itemsInCart: number;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const handleQtyChange = (id: string, requestQty: number) => {
    if (requestQty === 0) {
      return dispatch(
        deleteItemFromCart({
          id,
        })
      );
    }
    return dispatch(
      updateItemInCart({
        id,
        newQty: requestQty,
      })
    );
  };

  return (
    <article className="cart">
      <div className="cart__header">
        <h3>
          My Cart <small>({itemsInCart} items)</small>
        </h3>
      </div>
      {Object.keys(cartProducts).length > 0 ? (
        <>
          {Object.keys(cartProducts).map((itemId) => {
            const productDetais = cartProducts[itemId];
            return (
              <CartCard
                key={itemId}
                {...productDetais}
                onQtyChange={handleQtyChange}
              />
            );
          })}
          <div className="price-gurantee">
            <Image
              src={'/images/lowest-price.png'}
              width={144}
              height={51}
              alt="Lowest price"
              aria-hidden="true"
            />
            <p>You won&apos;t find it cheaper anywhere.</p>
          </div>
          <div className="cart__footer">
            <p>Promo code can be applied on payment page</p>
            <Button customClassName="cart__footer__btn" fullWidth>
              Proceed to checkout <span>Rs. {grandTotal}&nbsp; &gt;</span>
            </Button>
          </div>
        </>
      ) : (
        <div className="cart__noItems">
          <h3>No items in cart</h3>
          <p>Your favourite items are just a click away</p>
        </div>
      )}
    </article>
  );
}
