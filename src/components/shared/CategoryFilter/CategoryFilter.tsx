import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { T_Category } from '../../../../utils/types/categories';
import NavLink from '../../elements/NavLink';

export default function CategoryFilter({
  categories,
  subCategoryPage = false,
  activeCategoryId,
}: {
  categories: T_Category[];
  subCategoryPage: boolean;
  activeCategoryId?: string | string[] | null;
}): JSX.Element {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(router.asPath || '');
  const handleCategorySelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory !== '') {
      router.push(selectedCategory);
    }
    // because of router
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <>
      <div className="filters">
        <ul>
          {subCategoryPage && (
            <li>
              <NavLink href={`/products`}>
                <strong>&lt; Back to products</strong>
              </NavLink>
            </li>
          )}
          {categories &&
            categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  className={
                    activeCategoryId && category.id === activeCategoryId
                      ? 'active'
                      : ''
                  }
                  href={`/products/${category.key}/${category.id}`}
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
      <div className="filters--mobile">
        <select
          name="filters"
          id="filters"
          onChange={handleCategorySelection}
          value={selectedCategory}
        >
          {subCategoryPage && (
            <option value={'/products'}>Back to products</option>
          )}
          {!subCategoryPage && (
            <option value={''}>Select a sub category</option>
          )}
          {categories &&
            categories.map((category) => {
              const value = `/products/${category.key}/${category.id}`;
              return (
                <option key={category.id} value={value}>
                  {category.name}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
}
