import { Box, Flex, Spacer,Heading, Button, Text, HStack } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" >
      <Heading as="h1">Mind Palace Tasks</Heading>
      <Spacer />
      <HStack spacing="10px">
      <Box bg="gray.200" p="10px">S</Box>
      <Text>salmy101@github.com</Text>
      <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    
  )
}
