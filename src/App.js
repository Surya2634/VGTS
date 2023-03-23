import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Page/Home";
import MealDetail from "./Page/MealDetail/index.js";
import Checkout from "./Page/Checkout/index.js";
import ConfirmationPage from "./Page/OrderConfirmation"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<MealDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderConfirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
