import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

describe('Home page test suite', () => {
  it('renders category banner', () => {
    // Arrange
    render(
      <Home
        banners={[
          {
            bannerImageUrl: '/images/offers/offer1.jpg',
            bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
            isActive: true,
            order: 1,
            id: '5b6c38156cb7d770b7010ccc',
          },
        ]}
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
      />
    );

    // Act
    const categoryBanner = screen.getByRole('heading', {
      name: /Fruits & Vegetables/i,
    });
    const categoryLink = screen.getByText(/Explore Fruits & Vegetables/i);

    // Assert
    expect(categoryBanner).toBeInTheDocument();
    expect(categoryLink).toBeInTheDocument();
    expect(categoryLink.getAttribute('href')).toEqual(
      '/products/fruit-and-veg/5b6899953d1a866534f516e2'
    );
  });
});
