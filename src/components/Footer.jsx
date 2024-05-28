import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="gray.700" color="white" py={4} mt={10}>
      <Flex justify="center">
        <Link mx={2} href="/privacy-policy">
          Privacy Policy
        </Link>
        <Link mx={2} href="/terms-of-service">
          Terms of Service
        </Link>
      </Flex>
      <Text textAlign="center" mt={2}>
        &copy; {new Date().getFullYear()} Tech Forum. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;