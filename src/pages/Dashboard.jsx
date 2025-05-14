import { Box, Container, filter, Heading,Text} from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyles = {
    borderWidth: "1px",
    borderRadius: "lg",
    boxShadow: "md",
    p: "4",
    bg: "blue.100",
    color: "blue.800",
    fontWeight: "bold",
    filter: "blur(2px)",
    _hover: {
      filter: "blur(0px)",
      transition: "filter 0.2s ease-in-out",
    },
  };
  return (
    <Container as={"section"} maxWidth={"4xl"}>
      <Heading my={30} p={10}>Dashboard</Heading>
      <Text ml={30}>
        This is the dashboard page. You can add your content here.
      </Text>
      <Text ml={30} color="red.400" fontWeight={"bold"}> This is dashboard</Text>

      <Box my={30} p={10} borderWidth={1} borderRadius="lg" boxShadow="md" bg={"green.100"}>
        <Text ml={30} color="blue.600" fontWeight={"bold"} > This is box</Text> 
      </Box>


      <Box sx={boxStyles}>
        Hello world!
      </Box>
    </Container>

    
  )
}
