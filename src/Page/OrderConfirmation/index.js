import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./OrderConfirmation.module.css";

const ConfirmationPage = () => {
  const [meal, setMeal] = useState({});
  const [users, setUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const { meals } = useSelector((state) => state.meal);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (meals && location.state.id && user) {
      const foundIndex = meals.find((item) => {
        return item.idMeal === location.state.id;
      });
      setMeal(foundIndex);
      setUser(user);
    }
  }, [meals, location.state.id, user]);

  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <>
      <div>
        <h1>Order Details</h1>
        <div className={styles.card}>
          <div>
            <img src={meal.strMealThumb} alt="ProductImage" />
          </div>
          <div className={styles.details}>
            <h2>Item :{meal.strMeal}</h2>
            <span>Shipping Details </span>
            <span>{users.name}</span>
            <span>{users.address}</span>
            <span>{users.contact}</span>
            <span>{users.email}</span>

            <button className={styles.done}>Purchased</button>
            <button className={styles.homeButton} onClick={navigateHome}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
