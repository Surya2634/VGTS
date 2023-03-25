import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./MealDetail.module.css";
import Modal from "../../Component/Modal/Modal";

const MealDetail = () => {
  const [meal, setMeal] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { meals } = useSelector((state) => state.meal);
  const [openModal, setOpenModal] = useState(false);

  const navigateCheckout = () => {
    if (meal.idMeal) {
      navigate("/checkout", { state: { id: meal.idMeal } });
    } else {
      setOpenModal(true);
    }
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
      {openModal && (
        <Modal>
          <div>Sorry, There is no ID for this Meal, pick something else...</div>
          <button onClick={() => setOpenModal((prevData) => !prevData)}>
            Ok
          </button>
        </Modal>
      )}
    </>
  );
};

export default MealDetail;
