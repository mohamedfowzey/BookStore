import { createSlice } from '@reduxjs/toolkit'



export interface CartState {
    quantity: number;
}

const initialState: CartState = {
  quantity: 0,
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
      state.quantity++;
    },
    decrement: (state) => {
      console.log(state.quantity);
      
      if (state.quantity > 0) {
        state.quantity--;
      } 
      
    },
    decrementByAmount: (state, action) => {
      if(state.quantity >= action.payload) {
        state.quantity -= action.payload;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, decrementByAmount } = cartSlice.actions

export default cartSlice.reducer