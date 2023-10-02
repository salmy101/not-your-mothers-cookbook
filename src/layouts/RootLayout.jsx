import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="grey.50">
      <GridItem as="aside" colSpan="1" bg="purple.400" minHeight="100vh">
        <SideBar />
      </GridItem>

      <GridItem as="main" colSpan="5" p="20px">
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
