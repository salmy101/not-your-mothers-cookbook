import React, { useEffect, useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allRecipesURL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=2d70d1b799c04eecb53d02c1068dfe36&number=20";
const randomRecipeURL =
  "https://api.spoonacular.com/recipes/random?apiKey=2d70d1b799c04eecb53d02c1068dfe36&/random?number=1";

const AppProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])

  //the children prop = a special prop that represents thats in the compononet, aka  APP

  /*useEffect is a hook that runs after each render. It has a depencency thats passed after the cb function
, the calback will run after the component mounts/loads. an empty dependency will only run once when
the app initially loads since its in the root of the app. But when we pass vlaues and it will run each time the value changes  */
  const fetchRecipes = async (url) => {
    try {
      const {data} = await axios(url);
      setRecipes(data.results)
    } catch (error) {
      console.log("fetching error here", error);
    }
  };

  useEffect(() => {
    fetchRecipes(allRecipesURL);
  }, []);

  return (
    <AppContext.Provider value={{ recipes }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
