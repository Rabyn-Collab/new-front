import { createSlice } from "@reduxjs/toolkit";
import { cartSetToLocal, clearCartFromLocal, getCartsFromLocal } from "../../hooks/storage";




export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal()
  },
  reducers: {
    setToCart: (state, action) => {
      const isExist = state.carts.find((cart) => cart.product === action.payload.product);
      if (isExist) {
        state.carts = state.carts.map((cart) => cart.product === action.payload.product ? action.payload : cart);
        cartSetToLocal(state.carts);
      } else {
        state.carts = [...state.carts, action.payload];
        cartSetToLocal(state.carts);
      }
    },

    removeCart: (state, action) => {
      state.carts.splice(action.payload, 1);
      cartSetToLocal(state.carts);
    },
    clearCart: (state, action) => {
      state.carts = [];
      clearCartFromLocal();
    }
  }
});

export const { setToCart, removeCart, clearCart } = cartSlice.actions;