import { GetStaticPaths, GetStaticProps } from 'next';
import db from '../../../database/db';
import { ParsedUrlQuery } from 'querystring';
import { T_Product } from '../../../utils/types/product';
import ProductCard from '../../../src/components/shared/ProductCard/ProductCard';
import { T_Category } from '../../../utils/types/categories';
import NavLink from '../../../src/components/elements/NavLink';
import { useRouter } from 'next/router';
import CategoryFilter from '../../../src/components/shared/CategoryFilter/CategoryFilter';

interface IParams extends ParsedUrlQuery {
  categoryId: string;
}

type ProductProps = {
  categories: T_Category[];
  products: T_Product[];
};

export default function CategoryPage({
  products,
  categories,
}: ProductProps): JSX.Element {
  const { query } = useRouter();
  return (
    <div className="plp">
      <aside className="plp__sidebar">
        <CategoryFilter
          categories={categories}
          subCategoryPage={true}
          activeCategoryId={query?.categoryId || null}
        />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await db.getCategories();
  if (categories) {
    const catPaths = categories.map((category) => ({
      params: {
        categoryKey: category.key,
        categoryId: category.id,
      },
    }));
    return {
      paths: catPaths,
      fallback: false,
    };
  }
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { categoryId } = context.params as IParams;
  const products = await db.getProductsById(categoryId);
  const categories = await db.getCategories();
  return {
    props: {
      products,
      categories,
    },
  };
};
