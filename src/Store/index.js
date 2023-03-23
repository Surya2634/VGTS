import { createSlice } from "@reduxjs/toolkit";

const mealSlice = createSlice({
  name: "meal",
  initialState: { meal: [] },
  reducers: {
    getMealDetails: (state, action) => {
      const mealId = action.payload;
      state.meal = mealId;
    },
  },
});

export const { GetMeal } = mealSlice.actions;

export default mealSlice.reducer;

export const MealDetails = (state) => {
  return state.meal;
};
