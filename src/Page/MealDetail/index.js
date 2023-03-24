import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const MealDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { meals } = useSelector((state) => state.meal);
  console.log(meals);

  const navigateCheckout = () => {
    navigate("/checkout", { state: { id: meals.id } });
  };

  return (
    <>
      <img src={""} alt="Meal" />
      <p>{location.state.id}</p>
      <button onClick={navigateCheckout}>Check Out</button>
    </>
  );
};

export default MealDetail;
