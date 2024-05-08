import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
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
  Image,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import SearchBar from "../components/SearchBar";

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, recipes } = useGlobalContext(); //grabbing the props from context
  const [selectedRecipeInfo, setSelectedRecipeInfo] = useState('');

  const fetchRecipeInformation = async (recipeID) => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=2d70d1b799c04eecb53d02c1068dfe36&includeNutrition=false`
      );
      console.log("Fetching data here", data);
      setSelectedRecipeInfo(data); // Store fetched recipe information
      onOpen(); // Open the modal after fetching the information
    } catch (error) {
      console.log("Error fetching recipe information:", error);
    }
  };

  if (loading) {
    return (
      <Box>
        <Heading>Loading...</Heading>
      </Box>
    );
  }

  if (recipes.length < 1) {
    return (
      <Box>
        <Heading>No Recipes matched the search, please try again.</Heading>
      </Box>
    );
  }
  // const summaryWithoutTags = selectedRecipeInfo.summary.replace(/<[^>]+>/g, ''); 
  /* this line of code throw an error: 
   Cannot read properties of undefined (reading 'replace'). ChatGPT suggested I check if selectedRecipeInfo.summary 
   exists before attempting to replace the HTML tags
   I can do a condition like this  selectedRecipeInfo.summary ? selectedRecipeInfo.summary.replace(/<[^>]+>/g, '') : "" 
  If it does exist, it replaces HTML tags as before.
   */ 

  const summaryWithoutTags = selectedRecipeInfo.summary ? selectedRecipeInfo.summary.replace(/<[^>]+>/g, '') : '';



  return (
    <>
      <SearchBar />
      <recipeModal />
      <SimpleGrid spacing={10} minChildWidth={300}>
        {recipes &&
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              borderTop="8px"
              borderColor="purple.400"
              bg="white"
            >
              <CardHeader color="gray.700">
                <Flex gap={2}>
                  <Box w="50px" h="50px"></Box>
                  <Box>
                    <Heading as="h3" size="sm">
                      {recipe.title}
                    </Heading>
                    {/* <p>{selectedRecipeInfo.diets}</p> */} 
                  </Box>
                </Flex>
              </CardHeader>

              <CardBody color="gray.500">
                <Image src={recipe.image} />
              </CardBody>

              <Divider borderColor="gray.200" />

              <CardFooter>
                <HStack>
                  {/* <Button variant="ghost" leftIcon={<ViewIcon />}> */}
                  {/* {showModal &&  <recipeModal/>} */}
                  {/* </Button> */}
                  <Button
                    variant="ghost"
                    onClick={() => fetchRecipeInformation(recipe.id)}
                    leftIcon={<EditIcon />}
                  >
                    Comment
                  </Button>

                  {/* Modal to display additional recipe information */}
                  <Modal
                    closeOnOverlayClick={false}
                    isOpen={isOpen}
                    onClose={onClose}
                    size="xl"
                  >
                    {/* <ModalOverlay /> */}
                    <ModalContent>
                      <ModalHeader>{selectedRecipeInfo.title}</ModalHeader>
                      <ModalBody pb={6}>
                        <b>About the Recipe:</b>
                        <br/>
                        <Text>{summaryWithoutTags}</Text>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                          <Link href={selectedRecipeInfo.sourceUrl} isExternal>
                            Check out full Recipe! <ExternalLinkIcon mx="2px" />
                          </Link>
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </HStack>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
}

//make sure to start the json server with this command
//json-server -w ./data/db.json
//allows us to watch a json file in our project
//we need register this loader in a component in App.js as well
