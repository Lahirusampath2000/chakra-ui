import { Flex,Box, Heading, Button,Text, Spacer, HStack} from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (
    <Flex as={"nav"} p={10} alignItems={"center"} >

        <Heading as="h1">Chakra</Heading>

        <Spacer/>

        <HStack spacing={4}>
            <Box bg={"gray.200"} p="10px">M</Box>
            <Text>johnodoe@gmail.com</Text>
        <Button colorScheme={"blue"} ml={10} >Logout</Button>


        </HStack>

        
    </Flex>
//    <Flex bg={"gray.300"} justify={"space-between"} wrap={"wrap"} gap={4} >
//         <Box w={150} h={50} bg={"red"}>1</Box>
//         <Box w={150} h={50} bg={"blue"}>2</Box>
//         <Box w={150} h={50} flexGrow="1"bg={"green.800"}>3</Box>
//         <Box w={150} h={50} flexGrow={2} bg={"yellow"}>4</Box>

//    </Flex>
  )
}
