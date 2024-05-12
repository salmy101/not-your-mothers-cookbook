import { TabList, Tabs, Tab, TabPanels, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from '@chakra-ui/icons'
import { useGlobalContext } from "../context";



export default function Profile() {
  const {  myFav  } = useGlobalContext(); //grabbing the props from context

  return (
    <Tabs mt="40px" colorScheme="purple" p="20px" variant="enclosed">
      <TabList>
        <Tab _selected={{color: "white" , bg:"purple.400"}}>Account Info</Tab>
        <Tab _selected={{color: "white" , bg:"purple.400"}}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
            {myFav.map((recipe) => (
              
          // <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            // <img src={recipe.image} alt={recipe.title} />
            /* Render other recipe details as needed */
          // </li>
        ),
        console.log("favs list on profile",recipe.title)

        )
        }
              <ListIcon as={EmailIcon}/>
              Email: salmy101@github.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Lorem, ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon}/>
              Lorem, ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
          <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem, ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem, ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              Lorem, ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400"/>
              Lorem, ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400"/>
              Lorem, ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>


      </TabPanels>
    </Tabs>
  )
}
