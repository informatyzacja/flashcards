import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <Box
      w="100%"
      bg="#2397FF"
      px={10}
      boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Flex minH={14} alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Heading as="h1" color="white">
            fiszki
          </Heading>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
