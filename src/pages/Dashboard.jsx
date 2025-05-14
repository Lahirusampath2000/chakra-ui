import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Text} from "@chakra-ui/react";
import { use } from "react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  const tasks = useLoaderData()

  
  return (

    <SimpleGrid  spacing={10} minChildWidth={"300px"}>

      {tasks && tasks.map((task) => (
        <Card key={task.id} borderTop={"8px"} borderColor={"purple.300"}  >
          <CardHeader>
            <Flex gap={5}>
              <Avatar src={task.img}/>
              <Box>
                <Heading as="h3" size={"sm"}>{task.title}</Heading>
                <Text>By {task.author}</Text>
              </Box>
            </Flex>

          </CardHeader>

          <CardBody color={"gray.500"}>
            <Text>{task.description}</Text>

          </CardBody>

          <Divider borderColor={"gray.200"}/>

          <CardFooter>
            <HStack>
              <Button variant={"ghost"} leftIcon={<ViewIcon/>}>watch</Button>
              <Button variant={"ghost"} leftIcon={<EditIcon/>}>comment</Button>
            </HStack>

          </CardFooter>

        </Card>
      ))}
      

    </SimpleGrid>
   
    
  )
}


export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks")
  if(!res.ok) {
    throw Error("Could not fetch the data")
  }
  return res.json()
}
