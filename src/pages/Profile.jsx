import { TabList, Tabs, Tab, TabPanels, TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from '@chakra-ui/icons'



export default function Profile() {
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
