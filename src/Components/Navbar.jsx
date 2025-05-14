import { UnlockIcon } from '@chakra-ui/icons'
import { Flex,Box, Heading, Button,Text, Spacer, HStack, useToast, Avatar, AvatarBadge} from '@chakra-ui/react'
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
            <Avatar name="lahiru" bg="purple">
                 <AvatarBadge w="1.3em" bg="teal">
                    <Text fontSize={"xs"}>3</Text>
                 </AvatarBadge>
                 
            </Avatar>
            <Text>johnodoe@gmail.com</Text>
        <Button colorScheme={"blue"} ml={10} onClick={showtoast}>Logout</Button>


        </HStack>

        
    </Flex>
//    
  )
}
