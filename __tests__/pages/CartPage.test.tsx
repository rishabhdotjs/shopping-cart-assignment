import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../utils/test-utils';
import { fireEvent } from '@testing-library/dom';
import CartPage from '../../pages/cart';

const initialState = {
  cart: {
    products: {
      '5b6c6a7f01a7c38429530883': {
        name: 'Fresho Kiwi - Green, 3 pcs',
        imageURL: '/images/products/fruit-n-veg/kiwi-green.jpg',
        description:
          'Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.',
        price: 87,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-kiwi-3',
        id: '5b6c6a7f01a7c38429530883',
        qty: 4,
      },
    },
    loading: false,
    error: false,
  },
};

const setup = () => {
  const preloadedState = initialState;
  const utils = render(<CartPage />, {
    preloadedState,
  });
  const qtyInput = utils.getByLabelText('quantity stepper');
  const decreaseQtyBtn = utils.getByLabelText('decrease added quantity by 1');
  const increaseQtyBtn = utils.getByLabelText('increase added quantity by 1');
  return {
    qtyInput,
    decreaseQtyBtn,
    increaseQtyBtn,
    ...utils,
  };
};

describe('Cart Page test suite', () => {
  it('renders cart Page page', async () => {
    // Arrange
    const { qtyInput, decreaseQtyBtn, increaseQtyBtn } = setup();

    // both items should be available
    expect(screen.getByText(/Fresho Kiwi - Green, 3 pcs/i)).toBeInTheDocument();
    // total
    expect(screen.getByText(/348.00/i)).toBeInTheDocument();

    // qty
    const input = qtyInput as HTMLInputElement;
    expect(input.value).toEqual('4');
    // increase qty by input
    fireEvent.change(input, { target: { value: '5' } });
    expect(input.value).toEqual('5');
    expect(screen.getByText(/435.00/i)).toBeInTheDocument();

    // decrease qty by button
    fireEvent.click(decreaseQtyBtn);
    expect(input.value).toEqual('4');
    expect(screen.getByText(/348.00/i)).toBeInTheDocument();

    // increase by button
    fireEvent.click(increaseQtyBtn);
    expect(input.value).toEqual('5');
    expect(screen.getByText(/435.00/i)).toBeInTheDocument();
  });
});
