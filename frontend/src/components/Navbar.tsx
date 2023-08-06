import { Box, Flex, Text } from '@chakra-ui/react';

export default function Nav() {
  return (
    <Box w="100%" bg="#2397FF" px={10} boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)">
      <Flex h="60px" alignItems="center" justifyContent="space-between">
          <Text fontSize="40px" as="b" color="white">
            fiszki
          </Text>
      </Flex>
    </Box>
  );
}
