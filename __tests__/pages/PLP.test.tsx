import React from 'react';
import { mockNextUseRouter } from '../utils';
import Products from '../../pages/products';
import { render, screen, cleanup } from '../utils/test-utils';

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

beforeEach(() => {
  // Arrange
  mockNextUseRouter({
    route: '/products',
    pathname: '/products',
    query: '',
    asPath: `/products`,
    push: jest.fn(),
  });

  render(
    <Products
      categories={[
        {
          name: 'Beverages',
          key: 'beverages',
          description:
            'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
          enabled: true,
          order: 3,
          imageUrl: '/images/category/beverages.png',
          id: '5b675e5e5936635728f9fc30',
        },
        {
          name: 'Fruits & Vegetables',
          key: 'fruit-and-veg',
          description: 'A variety of fresh fruits and vegetables.',
          enabled: true,
          order: 1,
          imageUrl: '/images/category/fruits.png',
          id: '5b6899953d1a866534f516e2',
        },
      ]}
      products={[
        {
          name: 'Fresho Kiwi - Green, 3 pcs',
          imageURL: '/images/products/fruit-n-veg/kiwi-green.jpg',
          description:
            'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
          price: 87,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-kiwi-3',
          id: '5b6c6a7f01a7c38429530883',
        },
        {
          name: 'Apple - Washington, Regular, 4 pcs',
          imageURL: '/images/products/fruit-n-veg/apple.jpg',
          description:
            'The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.',
          price: 187,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-apple-4',
          id: '5b6c6aeb01a7c38429530884',
        },
        {
          name: 'Fresho Pomegrante Peeled, 500 gm',
          imageURL: '/images/products/fruit-n-veg/pomegrante.jpg',
          description:
            'Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.',
          price: 88,
          stock: 50,
          category: '5b6899953d1a866534f516e2',
          sku: 'fnw-pomegranate-500',
          id: '5b6c6b7001a7c38429530885',
        },
      ]}
    />
  );
});
afterEach(cleanup);

describe('Product Listing page', () => {
  it('renders PLP page', () => {
    const product1 = screen.getByText(/Fresho Kiwi - Green, 3 pcs/i);
    const product2 = screen.getByText(/Fresho Pomegrante Peeled, 500 gm/i);
    // should have product
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });
});
