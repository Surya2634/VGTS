import React from "react";
import SearchMeal from "../../Component/SearchMeal/SearchMeal";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <h1>Grap your Meal</h1>
      <SearchMeal className={styles.mealSearchBar} />
    </>
  );
};

export default Home;
