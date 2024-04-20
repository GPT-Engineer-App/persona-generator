import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, Text, VStack, Image, Heading, useToast } from "@chakra-ui/react";
import { FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [persona, setPersona] = useState({
    name: "",
    age: "",
    jobTitle: "",
    location: "",
    interests: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Persona Created",
      description: "Marketing persona has been successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Marketing Persona Generator
        </Heading>
        <Image src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmd8ZW58MHx8fHwxNzEzNjE4MzA4fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <Text>Create your marketing persona by filling out the form below.</Text>
        <Box as="form" w="full" onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input name="name" placeholder="Enter name" onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Age</FormLabel>
              <Input name="age" placeholder="Enter age" type="number" onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Job Title</FormLabel>
              <Input name="jobTitle" placeholder="Enter job title" onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input name="location" placeholder="Enter location" onChange={handleChange} />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Interests</FormLabel>
              <Input name="interests" placeholder="Enter interests" onChange={handleChange} />
            </FormControl>
            <Button leftIcon={<FaUserPlus />} colorScheme="blue" type="submit">
              Create Persona
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
