import reducer, {
  updateItemInCart,
  deleteItemFromCart,
} from '../../../../src/features/cart/cartSlice';

describe('cart slice test', () => {
  it('should return the initial state', () =>
    expect(reducer(undefined, {})).toEqual({
      products: {},
      loading: false,
      error: false,
    }));
  it('update qty of existing item in cart', () => {
    const prevState = {
      loading: false,
      error: false,
      products: {
        '5b675e5e5936635728f9fc30': {
          name: 'Beverages',
          imageURL: '/images/category/beverages.png',
          price: 87,
          sku: '5b675e5e5936635728f9fc30',
          id: '5b675e5e5936635728f9fc30',
          qty: 2,
        },
      },
    };
    expect(
      reducer(
        prevState,
        updateItemInCart({
          id: '5b675e5e5936635728f9fc30',
          newQty: 3,
        })
      )
    ).toEqual({
      ...prevState,
      products: {
        '5b675e5e5936635728f9fc30': {
          ...prevState.products['5b675e5e5936635728f9fc30'],
          qty: 3,
        },
      },
    });
  });
  it('delete item from cart', () => {
    const prevState = {
      loading: false,
      error: false,
      products: {
        '5b675e5e5936635728f9fc30': {
          name: 'Beverages',
          imageURL: '/images/category/beverages.png',
          price: 87,
          sku: '5b675e5e5936635728f9fc30',
          id: '5b675e5e5936635728f9fc30',
          qty: 2,
        },
      },
    };
    expect(
      reducer(
        prevState,
        deleteItemFromCart({
          id: '5b675e5e5936635728f9fc30',
        })
      )
    ).toEqual({
      ...prevState,
      products: {},
    });
  });
});
