import React, { useState, useEffect } from "react";
import { Input } from "antd";
import axios from "axios";

const { Search } = Input;

const SearchMeal = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const onSearch = setTimeout(() => {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);
    return () => clearTimeout(onSearch);
  });

  return (
    <Search
      placeholder="Search for food"
      onChange={(e) => setSearch(e.target.value)}
      enterButton
      className="MealSearchBar"
    />
  );
};

export default SearchMeal;
