import axios from "axios";

export const getMealBySearch = (parms) => {
  const { searchText } = parms;
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then((result) => {
      console.log({ result });
      if (result.status) return result.data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
};

export const getMeal = () => {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
    .then((result) => {
      console.log({ result });
      if (result.status) return result.data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
};
