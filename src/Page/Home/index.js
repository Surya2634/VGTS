import React, { useEffect, useState } from "react";
import MealCard from "../../Component/MealCard";
import axios from "axios";
import SearchMeal from "../../Component/SearchMeal";

const Home = () => {
  let [meal, setMeal] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((response) => {
        console.log(response.data.meals);
        setMeal(response.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Grap your Meal</h1>
      <SearchMeal className="MealSearchBar"/>
      <div className="MealContainer">
        {meal.map((e) => (
          <MealCard
            id={e.idMeal}
            name={e.strMeal}
            img={e.strMealThumb}
            mealCatogory={e.strCategory}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
