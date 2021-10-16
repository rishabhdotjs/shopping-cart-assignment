import Image from 'next/image';
import { T_Product } from '../../../../utils/types/product';
import { AddToCartAsync } from '../../../features/cart/cartSlice';
import { useAppDispatch } from '../../../store/store';
import Button from '../../elements/Button';

export default function ProductCard({
  description,
  id,
  sku,
  imageURL,
  name,
  price,
}: T_Product): JSX.Element {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(
      AddToCartAsync({
        id,
        imageURL,
        name,
        price,
        qty: 1,
        sku,
      })
    );
  };
  return (
    <article className="pcard">
      <div className="pcard__head">
        <h1 className="pcard__name">{name}</h1>
      </div>
      <figure className="pcard__image">
        <Image
          src={imageURL}
          alt={description}
          title={name}
          width={300}
          height={300}
          layout="responsive"
        />
      </figure>
      <div className="pcard__details">
        <p className="pcard__description">{description}</p>
        <div className="pcard__footer">
          <div className="pcard__footer--desktop">
            <p>
              <span>MRP:</span> {price}
            </p>
            <div className="buy-now">
              <Button
                onClick={handleAddToCart}
                aria-label={`add 1 quantity of ${name} for Rupees ${price}`}
              >
                Buy now
              </Button>
            </div>
          </div>
          <div className="pcard__footer--mobile">
            <Button
              fullWidth
              onClick={handleAddToCart}
              aria-label={`add 1 quantity of ${name} for Rupees ${price}`}
            >
              Buy now @ Rs.{price}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
