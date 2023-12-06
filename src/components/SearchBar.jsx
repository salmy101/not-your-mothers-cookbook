import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useGlobalContext } from "../context";

function SearchBar() {
  const { loading, recipes } = useGlobalContext();

  return (
    <Box 
      display="flex"
      paddingBottom="50px"
      gap={3}
    >
      <Form>
        <Input
          type="text"
          placeholder="Search by cusine, ingredients, etc"
        ></Input>
      </Form>
      <Box
       gap={3}
       >
        <Button>Search</Button>
        <Button>Surprise Me ;)</Button>
      </Box>
    </Box>
  );
}

export default SearchBar;
