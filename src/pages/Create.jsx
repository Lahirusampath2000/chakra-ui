import { Box, FormControl, FormLabel, Input ,  FormHelperText, Textarea, Checkbox, Button} from "@chakra-ui/react";
import { Form, redirect } from "react-router-dom";


export default function Create() {
  return (
    <Box maxW={"480px"} >
      <Form method="post" action="/create" >
        <FormControl isRequired mb={"40px"}>
          <FormLabel>Task Name:</FormLabel>
          <Input type="text" name="taskName"  />
          <FormHelperText>Enter a Task name</FormHelperText>

        </FormControl>

        <FormControl isRequired mb={"40px"}>
          <FormLabel>Task Description</FormLabel>
          <Textarea name="taskDescription" placeholder={"enter detailed description"}  />
          
        </FormControl>

        <FormControl display={"flex"} alignItems={"center"} mb={"40px"}>
          <Checkbox name="isPriority" size={"lg"} colorScheme="purple" >
            
          </Checkbox>
          <FormLabel fontSize={"1.2rem"} ml={"10px"} mb={"0px"}>Is this task a priority?</FormLabel> 

        </FormControl>

        <Button type="submit">Submit</Button>
      </Form>

    </Box>

    
  )
}

export const createAction = async ({request}) => {

  const data = await request.formData()
  const task = {
    title: data.get("taskName"),
    description: data.get("taskDescription"),
    isPriority: data.get("isPriority") === "on" ? true : false,
  }
  return redirect("/")
}
