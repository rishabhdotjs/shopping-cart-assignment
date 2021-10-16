import { useState } from 'react';
import { getGrandTotal } from '../../../features/cart/cartSlice';
import { useAppSelector } from '../../../store/store';
import CartView from '../../Cart/CartView';
import CartIcon from '../Icons/Cart';
import Modal from '../Modal/Modal';

export default function MiniCart(): JSX.Element {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const itemsAndTotal = useAppSelector(getGrandTotal);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  return (
    <div className="app__minicart">
      <button
        onClick={openModal}
        className="app__minicart-button"
        aria-label={`Shopping cart 0 items`}
      >
        <CartIcon />
        <span>{itemsAndTotal.items} Items</span>
      </button>
      <Modal
        isVisible={open}
        handleModalClose={closeModal}
        modalTitle="My Cart"
        onBackdropPress={closeModal}
      >
        <CartView
          cartProducts={cartProducts}
          grandTotal={itemsAndTotal.grandTotal}
          itemsInCart={itemsAndTotal.items}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}
