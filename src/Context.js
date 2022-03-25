import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [mealData, setMealData] = useState([]);
  const [calories, setCalories] = useState(2000);
  const [loading, SetLoading] = useState(false);
  // const getMeals = async () => {
  //   SetLoading(true);
  //   try {
  //     const resp = await fetch(
  //       `https://api.spoonacular.com/mealplanner/generate?apiKey=d185f84130504fdfb864e7049c1b9586&timeFrame=day&targetCalories=${calories}`
  //     );
  //     const data = await resp.json();
  //     console.log(data);
  //     setMealData(data);
  //     SetLoading(false);
  //   } catch (error) {}
  // };

  // useEffect(() => {
  //   getMeals();
  // }, []);

  return (
    <AppContext.Provider value={{ loading }}>{children}</AppContext.Provider>
  );
};

//hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
