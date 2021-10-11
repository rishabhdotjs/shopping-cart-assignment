import Image from 'next/image';
import { T_Category } from '../../../../utils/types/categories';

export default function HeroBanner({
  id,
  name,
  order,
  description,
  imageUrl,
}: T_Category): JSX.Element {
  return (
    <article className="hero">
      <div
        className={order % 2 === 0 ? 'hero__image hero--right' : 'hero__image'}
      >
        <Image
          src={imageUrl}
          alt={description}
          layout="responsive"
          width={300}
          height={200}
        />
      </div>
      <div className="hero__text">
        <h3>{name}</h3>
        <p>{description}</p>
        <button className="btn btn--primary">Explore {name}</button>
      </div>
    </article>
  );
}
