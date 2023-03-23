import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MealCard from "../../Component/MealCard";
import axios from "axios";
import SearchMeal from "../../Component/SearchMeal";
import { StoreMealDetails } from "../../Store/Index.js"

const Home = () => {

  const { meals } = useSelector((state) => state.meal);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((response) => {
        dispatch(StoreMealDetails(response.data.meals));
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <>
      <h1>Grap your Meal</h1>
      <SearchMeal className="MealSearchBar" />
      <div className="MealContainer">
        {meals.map((e) => (
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
