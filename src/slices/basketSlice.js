import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //actions
    addToBasket: (state, action) => {
      // .push() doesnt work cause it would try mutate array
      //  this way we assign new arr
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors -  This is how to pull information from the Global store slice
// state.basket is coming from app/store.js file reducers:{ basket :}
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
