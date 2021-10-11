import CartIcon from '../Icons/Cart';

export default function MiniCart(): JSX.Element {
  return (
    <a href="#" className="app__minicart" aria-label={`Shopping cart 0 items`}>
      <CartIcon />
      <span>0 Items</span>
    </a>
  );
}
