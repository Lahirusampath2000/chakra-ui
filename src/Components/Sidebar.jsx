import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons'
import { List ,ListIcon,ListItem} from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Sidebar() {
  return (

    <List color={"white"} fontSize={"1.2rem"} spacing={4}>
        <ListItem>
            <NavLink to={"/"} >
                <ListIcon as={CalendarIcon} color={"white"}/>
                Dashboard
            </NavLink> 
        </ListItem>

        <ListItem>
            <NavLink to={"/create"} >
                <ListIcon as={EditIcon} color={"white"}/>   
                Newtask
            </NavLink> 
        </ListItem>

        <ListItem>
            <NavLink to={"/profile"} >
                <ListIcon as={AtSignIcon} color={"white"}/>
                Profile
            </NavLink> 
        </ListItem>
        

    </List>
    
  )
}
