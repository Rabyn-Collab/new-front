import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, removeUserFromLocal, userSetToLocal } from "../../hooks/storage";



export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: getUserFromLocal()
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      userSetToLocal(state.user);
    },
    clearUser: (state, action) => {
      state.user = null;
      removeUserFromLocal();
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;