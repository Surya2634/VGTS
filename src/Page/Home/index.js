import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import SearchMeal from "../../Component/SearchMeal";
import { StoreMealDetails } from "../../Store/Index.js";

const Home = () => {
  // const { meals } = useSelector((state) => state.meal);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((response) => {
        dispatch(StoreMealDetails(response.data.meals));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Grap your Meal</h1>
      <SearchMeal className="MealSearchBar" />
    </>
  );
};

export default Home;
