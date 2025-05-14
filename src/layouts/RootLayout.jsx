import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg={"gray.50"} >

      <GridItem as={"aside"} colSpan={{base:6,lg:2,xl:1}} minHeight={"100vh"} bg={"purple.500"} p={{base:"20px",lg:"30px"}} >
        <span>Sidebar</span>
      </GridItem>
      

      <GridItem as={"main"} colSpan={{base:6,lg:4,xl:5}} p="40px" >
        <Navbar/>
        <Outlet />
      </GridItem>
      
    </Grid>
  )
}
