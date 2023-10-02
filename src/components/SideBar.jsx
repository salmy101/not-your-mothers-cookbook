import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} />
          Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/create">
          <ListIcon as={EditIcon}/>
          New Task
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/profile">
          <ListIcon as={AtSignIcon}/>
          Profile
        </NavLink>
      </ListItem>
    </List>
  )
}
