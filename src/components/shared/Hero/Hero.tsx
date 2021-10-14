import Image from 'next/image';
import Link from 'next/link';
import { T_Category } from '../../../../utils/types/categories';

interface Props extends T_Category {
  itemKey: string;
}

export default function HeroBanner({
  id,
  itemKey,
  name,
  order,
  description,
  imageUrl,
}: Props): JSX.Element {
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
        <Link href={`/products/${itemKey}/${id}`}>
          <a className="btn btn--primary">Explore {name}</a>
        </Link>
      </div>
    </article>
  );
}
