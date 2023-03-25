import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "../../CustomHook/useDebounce";
import { Input } from "antd";
import MealCard from "../MealCard/MealCard.js";
import { StoreMealDetails } from "../../Store/MealStore";
import { getMealBySearch, getMeal } from "../../service.js";
import styles from "./SearchMeal.module.css";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const { Search } = Input;
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const SearchMeal = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [meal, setMeal] = useState([]);
  const debouncedSearchText = useDebounce(search, 1000);
  const [isSearchData, setIsSearchData] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    if (!debouncedSearchText) {
      getMeal().then((response) => {
        setIsSearchData(true);
        setMeal(response.meals);
        dispatch(StoreMealDetails(response.meals));
        setIsLoading(false);
      });
    } else {
      getMealBySearch({ searchText: debouncedSearchText }).then((response) => {
        if (response.meals) {
          setIsSearchData(true);
          setMeal(response.meals);
          dispatch(StoreMealDetails(response.meals));
        } else {
          setIsSearchData(!isSearchData);
        }
        setIsLoading(false);
      });
    }
  }, [debouncedSearchText]);

  return (
    <>
      <Search
        placeholder="Search for food"
        onChange={(e) => setSearch(e.target.value)}
        enterButton
        className={styles.MealSearchBar}
      />
      {isLoading ? (
        <div className={styles.MealContainer}>
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
            <p>Sorry, the Meal you are Searching for is not found...</p>
          )}
        </div>
      ) : (
        <Spin indicator={antIcon} />
      )}
    </>
  );
};

export default SearchMeal;
