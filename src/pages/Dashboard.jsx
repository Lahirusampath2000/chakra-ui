import { Box, SimpleGrid} from "@chakra-ui/react";

export default function Dashboard() {

  
  return (

    <SimpleGrid columns={4} p={10} spacing={10} minChildWidth={"250px"}>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>

      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>

      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>
      <Box bg={"white"} h="200px" border="1px solid" ></Box>

    </SimpleGrid>
   
    
  )
}
