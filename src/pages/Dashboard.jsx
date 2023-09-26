import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyles = {
    p: "10",
    bg: "purple.400",
    color: "white",
    m: "10px",
    textAlign: "center",
    filter: "blur(2px)",
    ':hover': {
      color: "black",
      bg: "blue.200"
    }
  }

  return (
    <Container as="section" maxWidth="4xl">
      <Heading my="30px" p="10px">Hello</Heading>
      <Text marginLeft="30px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ratione?</Text>
      <Text ml="30px" color="blue.300" fontWeight="bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ratione?</Text>

      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a Box</Text>
      </Box>

      <Box sx={boxStyles}>
        Hello, Ninjas
      </Box>

    </Container>
  )
}
