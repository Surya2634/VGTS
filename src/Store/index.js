import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./MealStore.js";
import userReducer from "./UserStore.js";

const appReducer = {
  meal: mealReducer,
  user: userReducer,
};

export const Store = configureStore({
  reducer: appReducer,
});
