import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProvider } from "./context";

const theme = extendTheme()

//extend theme
const colors= {
  brand:{
    
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
      <App />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>
);
