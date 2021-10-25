import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { CartProduct } from '../../features/cart/cartSlice';

interface Props extends CartProduct {
  onQtyChange: (arg0: string, arg1: number) => void;
}

export default function CartCard({
  id,
  name,
  imageURL,
  qty,
  price,
  onQtyChange,
}: Props): JSX.Element {
  const [enteredQty, setEnteredQty] = useState(qty);

  const handleQtyInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newQty = Math.floor(+e.currentTarget.value);
    setEnteredQty(newQty);
    return onQtyChange(id, newQty);
  };

  const handleQtyChange = (type: string) => {
    switch (type) {
      case 'increment': {
        const newQty = enteredQty + 1;
        setEnteredQty(newQty);
        return onQtyChange(id, newQty);
      }
      case 'decrement': {
        const newQty = enteredQty - 1;
        setEnteredQty(newQty);
        return onQtyChange(id, newQty);
      }
      default:
        return enteredQty;
    }
  };

  const totalItemPrice = (qty * price).toFixed(2);

  return (
    <article className="card">
      <div className="card__image">
        <Image src={imageURL} alt={name} title={name} width={64} height={64} />
      </div>
      <div className="card__body">
        <div className="item">
          <div className="item__header">
            <h3>{name}</h3>
          </div>
          <div className="item__body">
            <div className="qty">
              <button
                className="qty__btn"
                onClick={() => handleQtyChange('decrement')}
                aria-label="decrease added quantity by 1"
              >
                -
              </button>
              <input
                className="qty__input"
                type="number"
                name="quantity"
                value={enteredQty}
                onChange={handleQtyInput}
                aria-label="quantity stepper"
              />
              <button
                className="qty__btn"
                onClick={() => handleQtyChange('increment')}
                aria-label="increase added quantity by 1"
              >
                +
              </button>
              <span className="qty__price" aria-hidden="true">
                <i>X</i> Rs. {price}
              </span>
            </div>
            <div
              className="price"
              aria-live="polite"
              aria-label={`Total item price is Rupees ${totalItemPrice}`}
            >
              {totalItemPrice}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
