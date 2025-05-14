import { UnlockIcon } from '@chakra-ui/icons'
import { Flex,Box, Heading, Button,Text, Spacer, HStack, useToast} from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
    const toast=useToast()

    const showtoast=()=>{
        toast({
            title: "Logout",
            description: "You have been logged out",
            status: "success",
            duration: 3000,
            isClosable: true,
            position:"top",
            colorScheme:"purple",
            icon: <UnlockIcon/>
        })
    }
  return (
    <Flex as={"nav"} p={10} alignItems={"center"}  mb={"40px"}>

        <Heading as="h1">Chakra</Heading>

        <Spacer/>

        <HStack spacing={4}>
            <Box bg={"gray.200"} p="10px">M</Box>
            <Text>johnodoe@gmail.com</Text>
        <Button colorScheme={"blue"} ml={10} onClick={showtoast}>Logout</Button>


        </HStack>

        
    </Flex>
//    
  )
}
