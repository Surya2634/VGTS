import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "./MealDetail.module.css";

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
      <h1>Meal Details</h1>
      <div className={styles.MealDetailContainer}>
        <div>
          <img
            src="https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg"
            alt="Meal"
            className={styles.MealImg}
          />
        </div>
        <div className={styles.MealDescription}>
          {/* <p>{location.state.id}</p> */}
          <h1>Dish Name</h1>
          <p>Dish Category</p>
          <p className={styles.mealInstruction}>
            "In a large casserole, fry the sausages until brown all over – about
            10 mins.\r\n\r\nAdd the tomato sauce, stirring well, then stir in
            the beans, treacle or sugar and mustard. Bring to the simmer, cover
            and cook for 30 mins. Great served with crusty bread or rice."
          </p>
          <button onClick={navigateCheckout} className={styles.ChekoutButton}>
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default MealDetail;
