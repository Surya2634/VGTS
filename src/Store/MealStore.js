import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./Index.js";

export const MealStore = configureStore({
  reducer: {
    meal: mealReducer,
  },
});
