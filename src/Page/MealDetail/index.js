import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./MealDetail.module.css";

const MealDetail = () => {
  const [meal, setMeal] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { meals } = useSelector((state) => state.meal);
  console.log(meals);

  const navigateCheckout = () => {
    navigate("/checkout", { state: { id: meal.idMeal } });
  };

  useEffect(() => {
    if (meals && location.state.id) {
      const foundIndex = meals.find((item) => {
        return item.idMeal === location.state.id;
      });
      setMeal(foundIndex);
      console.log({ foundIndex });
    }
  }, [meals, location.state.id]);

  return (
    <>
      <h1>Meal Details</h1>
      <div className={styles.MealDetailContainer}>
        <div>
          <img src={meal.strMealThumb} alt="Meal" className={styles.MealImg} />
        </div>
        <div className={styles.MealDescription}>
          <h1>{meal.strMeal}</h1>
          <p>{meal.strCategory}</p>
          <p className={styles.mealInstruction}>{meal.strInstructions}</p>
          <button onClick={navigateCheckout} className={styles.ChekoutButton}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default MealDetail;
