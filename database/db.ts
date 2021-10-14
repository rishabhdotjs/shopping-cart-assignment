import { T_Banner } from '../utils/types/banner';
import { T_Category } from '../utils/types/categories';
import { T_Product } from '../utils/types/product';
import utils from '../utils/utils';

const db = {
  getBanners: async function (): Promise<T_Banner[] | null> {
    const data = await utils.readFile<T_Banner>('banners', 'index.get.json');
    if (data && Array.isArray(data)) {
      const sortedData = utils.sortByOrder(data, 'order');
      const filteredData = utils.filterByKey(sortedData, 'isActive');
      return filteredData;
    }
    return null;
  },
  getCategories: async function (): Promise<T_Category[] | null> {
    const data = await utils.readFile<T_Category>(
      'categories',
      'index.get.json'
    );
    if (data && Array.isArray(data)) {
      const sortedData = utils.sortByOrder(data, 'order');
      const filteredData = utils.filterByKey(sortedData, 'enabled');
      return filteredData;
    }
    return null;
  },
  getProductsById: async function (
    categoryId: string
  ): Promise<T_Product[] | null> {
    const products = await utils.readFile<T_Product>(
      'products',
      'index.get.json'
    );
    if (products && Array.isArray(products)) {
      // based on passed categoryId filter products
      const foundProducts = utils.filterByKey(products, 'category', categoryId);
      return foundProducts;
    }
    return null;
  },
  getProducts: async function (): Promise<T_Product[] | null> {
    const products = await utils.readFile<T_Product>(
      'products',
      'index.get.json'
    );
    if (products && Array.isArray(products)) {
      // based on passed categoryId filter products
      return products;
    }
    return null;
  },
};

export default db;
