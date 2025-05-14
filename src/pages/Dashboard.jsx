import { Box, SimpleGrid, Text} from "@chakra-ui/react";

export default function Dashboard() {

  
  return (

    <SimpleGrid columns={4} p={10} spacing={10} minChildWidth={"250px"}>
      <Box bg={"white"} h="200px" border="1px solid" >
        <Text color={{base: "pink", md:"green", lg:"blue.900"}}>hello</Text>
      </Box>
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
