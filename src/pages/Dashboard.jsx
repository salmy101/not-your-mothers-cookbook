import { EditIcon, ViewIcon } from "@chakra-ui/icons"
import { 
  Box, 
  SimpleGrid,
  Text,
  Flex,
  Heading,
  Card, 
  CardHeader,
  CardBody,
  CardFooter,
  HStack,
  Divider,
  Button,
  Avatar,
  Image
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../context"
import SearchBar from "../components/SearchBar"

export default function Dashboard() {

  const {loading, recipes} = useGlobalContext() //grabbing the props from context

  if(loading){
    return <Box>
      <Heading>Loading...</Heading>
    </Box>
  }
  
  if(recipes.length < 1){
    return <Box>
      <Heading>No Recipes matched the search, please try again.</Heading>
    </Box>
  }


  return (
    <>
      <SearchBar />
    <SimpleGrid spacing={10} minChildWidth={300}>
      {recipes && recipes.map(recipe => (
        <Card key={recipe.id} borderTop="8px" borderColor="purple.400" bg="white">

          <CardHeader color="gray.700">
            <Flex gap={2}>
              <Box w="50px" h="50px">
              </Box>
              <Box>
                <Heading as="h3" size="sm">{recipe.title}</Heading>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
                <Image  src={recipe.image}/>
          </CardBody>

          <Divider borderColor="gray.200" />

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>

        </Card>
      ))}
    </SimpleGrid>
      </>
  )
}


//make sure to start the json server with this command
//json-server -w ./data/db.json
//allows us to watch a json file in our project
//we need register this loader in a component in App.js as well