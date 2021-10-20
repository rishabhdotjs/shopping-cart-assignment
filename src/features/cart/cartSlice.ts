import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../../store/store';
import { addToCartAPI } from './cartAPI';

export type CartProduct = {
  name: string;
  imageURL: string;
  price: number;
  sku: string;
  id: string;
  qty: number;
};

type State = {
  products: Record<string, CartProduct>;
  loading: boolean;
  error: boolean;
};

const initialState: State = {
  products: {},
  loading: false,
  error: false,
};

export const AddToCartAsync = createAsyncThunk(
  'cart/addToCartAsync',
  async (payload: CartProduct) => {
    const response = await addToCartAPI(payload);
    return response;
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateItemInCart: (
      state,
      action: PayloadAction<{ id: string; newQty: number }>
    ) => {
      state.products[action.payload.id].qty = action.payload.newQty;
    },
    deleteItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      delete state.products[action.payload.id];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AddToCartAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(AddToCartAsync.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.response === 'Success') {
        const { product } = action.payload;
        // before adding to cart, check if product exist
        if (state.products[product.id]) {
          // update qty of pid
          const existingProd = state.products[product.id];
          existingProd.qty += 1;
        } else {
          // push as new product in cart
          state.products[product.id] = product;
        }
      }
    });
  },
});

export const { updateItemInCart, deleteItemFromCart } = cartSlice.actions;

// create selector for grandtotal
export const getGrandTotal = (
  state: AppState
): { grandTotal: number; items: number } => {
  return Object.keys(state.cart.products).reduce(
    (acc, cval) => {
      const product = state.cart.products[cval];
      acc.items += product.qty;
      acc.grandTotal += product.qty * product.price;
      return acc;
    },
    {
      grandTotal: 0,
      items: 0,
    }
  );
};

export default cartSlice.reducer;
