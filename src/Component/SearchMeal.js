import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input } from "antd";
import MealCard from "./MealCard.js";
import axios from "axios";
import { StoreMealDetails } from "../Store/Index.js";

const { Search } = Input;

const SearchMeal = () => {
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState([]);
  const [isSearchData, setIsSearchData] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!search) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
        .then((response) => {
          setMeal(response.data.meals);
          dispatch(StoreMealDetails(response.data.meals));
        })
        .catch((err) => console.log(err));
    } else {
      const onSearch = setTimeout(() => {
        axios
          .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then((response) => {
            if (response.data.meals) {
              setIsSearchData(true);
              setMeal(response.data.meals);
              dispatch(StoreMealDetails(response.data.meals));
            } else {
              setIsSearchData(!isSearchData);
            }
          })
          .catch((err) => console.log(err));
      }, 100);
      return () => clearTimeout(onSearch);
    }
  }, [search]);

  return (
    <>
      <Search
        placeholder="Search for food"
        onChange={(e) => setSearch(e.target.value)}
        enterButton
        className="MealSearchBar"
      />
      <div className="MealContainer">
        {isSearchData ? (
          meal.map((e) => (
            <MealCard
              id={e.idMeal}
              name={e.strMeal}
              img={e.strMealThumb}
              mealCatogory={e.strCategory}
            />
          ))
        ) : (
          <p>The Meal you are Searching for is not found</p>
        )}
      </div>
    </>
  );
};

export default SearchMeal;
