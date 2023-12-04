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

export default function Dashboard() {

  const {recipes} = useGlobalContext()
  console.log("Context",recipes)


  return (
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
  )
}
