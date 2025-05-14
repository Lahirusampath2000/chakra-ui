import { ChatIcon, CheckCircleIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels,Tabs ,List} from "@chakra-ui/react";

export default function Profile() {
  return (
    
    <Tabs mt={"40px"} p={"20px"} colorScheme="purple" variant="enclosed" >

      <TabList>
        <Tab _selected={{color:"white" ,bg:"purple.400"}}>Account Info</Tab>
        <Tab _selected={{color:"white" ,bg:"purple.400"}}>Task History</Tab>

      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email:JohnDoe@gmail.com

            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Welcome to task app

            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              star icon

            </ListItem>

          </List>

        </TabPanel>

        <TabPanel>
          <List>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}/>
              task 1
            </ListItem>

             <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}/>
              task 2
            </ListItem>
             <ListItem>
              <ListIcon as={WarningIcon} color={"red.400"}/>
              task 3
            </ListItem>
             <ListItem>
              <ListIcon as={CheckCircleIcon} color={"teal.400"}/>
              task 4
            </ListItem>

             <ListItem>
              <ListIcon as={WarningIcon} color={"red.400"}/>
              task 5
            </ListItem>
            
            
            
            
            
          </List>
        </TabPanel>

      </TabPanels>


    </Tabs>
  )
}
