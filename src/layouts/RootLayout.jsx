import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="grey.50">
      <GridItem 
      as="aside" 
      colSpan={{base: 6, lg: 1, xl: 1}}
      bg="purple.400" 
      minHeight={{lg: "100vh"}}
      p={{base: "20px", lg: "30px"}}
      >
        <SideBar />
      </GridItem>

      <GridItem 
      as="main" 
      colSpan={{base: 6, lg: 5, xl: 5}}      
      p="40px">
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
