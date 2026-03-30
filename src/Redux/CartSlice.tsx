import { createSlice } from '@reduxjs/toolkit'

interface CartItem {
    bookId: string;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items.push({ bookId: "default-book-id", quantity: 1 });
    },
    decrement: (state) => {
      if (state.items.length > 0) {
        state.items.pop();
      }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartSlice.actions

export default cartSlice.reducer