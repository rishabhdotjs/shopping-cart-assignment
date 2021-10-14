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
      </div>
      <div className="pcard__body">
        <p>{description}</p>
      </div>
      <div className="pcard__footer">
        <p>
          <span>MRP:</span> {price}
        </p>
        <div className="buy-now">
          <Button onClick={handleAddToCart}>Buy now</Button>
        </div>
      </div>
    </article>
  );
}
