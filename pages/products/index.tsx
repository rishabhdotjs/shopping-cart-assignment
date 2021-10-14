import { GetStaticProps } from 'next';
import db from '../../database/db';
import NavLink from '../../src/components/elements/NavLink';
import ProductCard from '../../src/components/shared/ProductCard/ProductCard';
import { T_Category } from '../../utils/types/categories';
import { T_Product } from '../../utils/types/product';

type ProductProps = {
  categories: T_Category[];
  products: T_Product[];
};

export default function Products({
  categories,
  products,
}: ProductProps): JSX.Element {
  return (
    <div className="plp">
      <aside className="plp__sidebar">
        <ul className="filters">
          {categories &&
            categories.map((category) => (
              <li key={category.id}>
                <NavLink href={`/products/${category.key}/${category.id}`}>
                  {category.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </aside>
      <article className="plp__main">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </article>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await db.getCategories();
  const products = await db.getProducts();
  return {
    props: {
      categories,
      products,
    },
  };
};
