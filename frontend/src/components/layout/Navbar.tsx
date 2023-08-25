import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Box
      w="100%"
      px={{ base: 4, md: 16 }}
      py={6}
      bg="#2397FF"
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <Heading color="white" fontSize="2xl">
            fiszki
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
