import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
};

export const mealSlice = createSlice({
  name: "MealDetails",
  initialState,
  reducers: {
    StoreMealDetails: (state, action) => {
      state.meals = action.payload;
    },
  },
});

export const { StoreMealDetails } = mealSlice.actions;

export default mealSlice.reducer;
