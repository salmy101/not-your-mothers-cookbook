import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { useGlobalContext } from "../context";

function SearchBar() {
  const [text, setText] = useState("");
  const { setSetSearchTerm } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSetSearchTerm(text);
      // setText("")
    }
  };

  return (
    <Box display="flex" justifyContent="columns" paddingBottom="50px" gap={3}>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search by cusine, ingredients, etc"
          value={text}
          onChange={handleChange}
        ></Input>
          <Box gap={3}>
            <Button type="submit" backgroundColor="pink">
              Search
            </Button>
            <Button backgroundColor="purple.100">Surprise Me ;)</Button>
          </Box>
      </Form>
    </Box>
  );
}

export default SearchBar;
