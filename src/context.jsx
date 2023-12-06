import React, { useEffect, useContext, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const allRecipesURL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=2d70d1b799c04eecb53d02c1068dfe36&number=25";
const randomRecipeURL =
  "https://api.spoonacular.com/recipes/random?apiKey=2d70d1b799c04eecb53d02c1068dfe36&/random?number=1";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])

  //the children prop = a special prop that represents thats in the compononet, aka  APP

  /*useEffect is a hook that runs after each render. It has a depencency thats passed after the cb function
, the calback will run after the component mounts/loads. an empty dependency will only run once when
the app initially loads since its in the root of the app. But when we pass vlaues and it will run each time the value changes  */
  const fetchRecipes = async (url) => {
    setLoading(true)
    try {
      const {data} = await axios.get(url);
      console.log("Fetching data here", data.results)
      if(data.results){
        setRecipes(data.results)
      }
      else{
        setRecipes([]) //if there is no data returned form the api
      }
    } catch (error) {
      console.log("fetching error here", error);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchRecipes(allRecipesURL); //call the function here, always fetch the data INSIDE the useEffect
  }, []); //on initial render we change the value of meals in line22, and every change causes a re-render. thats why we need a dependency array

/*
the infinite loop:
1.initial render (we invoke useEffect)
2. inside the useEffect cb, we fetch data and change the value of recipes 
3. it triggers a re-render
4. we repeat steps 2 and 3
** without the empty array in the dependcy, it will re-render so many times
that the app would crash. check the network tab without an array in the useEffect*/


  return (
    <AppContext.Provider 
      value={{ loading, recipes }} //pass down to the entire application
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
