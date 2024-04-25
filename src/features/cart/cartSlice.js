import { createSlice } from "@reduxjs/toolkit";
import { getCartsFromLocal } from "../../hooks/storage";




export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState: {
    carts: getCartsFromLocal()
  },
  reducers: {
    setToCart: (state, action) => {

    },
    clearCart: (state, action) => {

    }
  }
});

export const { setToCart } = cartSlice.actions;