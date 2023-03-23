import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const MealDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { meal } = useSelector((state) =>
    state.meal.meals.map((meal) => {
      if (meal.idMeal == location.state.id) {
        console.log(meal);
        return meal;
      }
    })
  );

  const navigateCheckout = () => {
    navigate("/checkout", { state: { id: meal.id } });
  };

  return (
    <>
      <img src={""} alt="Meal" />
      <p>{meal.idMeal}</p>
      <button onClick={navigateCheckout}>Check Out</button>
    </>
  );
};

export default MealDetail;
