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
  Avatar
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../context"

export default function Dashboard() {
  const tasks = useLoaderData()

  const context = useGlobalContext()
  console.log("Context",context)


  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor="purple.400" bg="white">

          <CardHeader color="gray.700">
            <Flex gap={5}>
              <Box w="50px" h="50px">
              <Avatar name={task.author} src={task.img} />
              </Box>
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>

          <CardBody color="gray.500">
            <Text>{task.description}</Text>
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

export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')

  return res.json()
}

//make sure to start the json server with this command
//json-server -w ./data/db.json
//allows us to watch a json file in our project
//we need register this loader in a component in App.js as well