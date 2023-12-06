import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/recipes">
          <ListIcon as={CalendarIcon} />
          Search
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/favourites">
          <ListIcon as={EditIcon}/>
          Favourites
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon}/>
          My Recipes
        </NavLink>
      </ListItem>
    </List>
  )
}
