import React, { useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //the children prop = a special prop that represents thats in the compononet, aka  APP

  /*useEffect is a hook that runs after each render. It has a depencency thats passed after the cb function
, the calback will run after the component mounts/loads. an empty dependency will only run once when
the app initially loads since its in the root of the app. But when we pass vlaues and it will run each time the value changes  */
const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log("fetch data here", data);
  } catch (error) {
    console.log(error);
  }
};
  
useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ name: "salma", age: "3" }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
