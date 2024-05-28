import { Box, Container, Heading, Text, VStack, Link } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link as RouterLink } from "react-router-dom";

const categories = [
  { name: "General", description: "General discussions about technology." },
  { name: "Programming", description: "Talk about coding, algorithms, and more." },
  { name: "Hardware", description: "Discuss the latest in computer hardware." },
  { name: "Software", description: "Share insights on software and applications." },
];

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.md" py={10}>
        <Heading as="h1" mb={6} textAlign="center">
          Welcome to Tech Forum
        </Heading>
        <VStack spacing={8}>
          {categories.map((category) => (
            <Box key={category.name} p={5} shadow="md" borderWidth="1px" width="100%">
              <Heading fontSize="xl">{category.name}</Heading>
              <Text mt={4}>{category.description}</Text>
              <Link as={RouterLink} to={`/categories/${category.name.toLowerCase()}`} color="blue.500" mt={2} display="block">
                View Discussions
              </Link>
            </Box>
          ))}
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;