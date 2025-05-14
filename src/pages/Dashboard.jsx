import { Box, SimpleGrid, Text} from "@chakra-ui/react";
import { use } from "react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {

  const tasks = useLoaderData()

  
  return (

    <SimpleGrid  spacing={10} minChildWidth={"300px"}>

      {tasks && tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
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
