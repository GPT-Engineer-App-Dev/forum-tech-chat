import { Box, Container, Flex, Heading, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const categories = [
  { name: "General", description: "General discussions about technology." },
  { name: "Programming", description: "Talk about programming languages, frameworks, and best practices." },
  { name: "Hardware", description: "Discuss the latest in computer hardware and gadgets." },
  { name: "Software", description: "Share and learn about software tools and applications." },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          Tech Forum
        </Heading>
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/">Home</Link>
          <Link as={RouterLink} to="/categories">Categories</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </Stack>
      </Flex>

      <VStack spacing={8} mt={8}>
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

      <Flex as="footer" bg="gray.100" p={4} mt={8} justifyContent="center">
        <Stack direction="row" spacing={4}>
          <Link as={RouterLink} to="/privacy-policy">Privacy Policy</Link>
          <Link as={RouterLink} to="/terms-of-service">Terms of Service</Link>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;