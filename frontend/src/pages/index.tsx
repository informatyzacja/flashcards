import { Flex, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex
      flexDirection={{ base: 'column-reverse', lg: 'row' }}
      gap={16}
      py={8}
      px={4}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w={{ base: 'xs', lg: 'sm' }}
        h={{ base: 'xs', lg: 'sm' }}
        bgGradient="linear(111.27deg, rgba(136, 56, 255, 0.1) 32.04%, rgba(91, 219, 255, 0.1) 79.8%)"
        borderRadius="2xl"
        border="3px"
        borderStyle="dashed"
        borderColor="#6510E3"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          px={16}
          textAlign="center"
        >
          Upuść pliki tutaj lub kliknij by otworzyć folder
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        maxW="md"
        width="100%"
        height="100%"
      >
        <Heading
          fontSize="2xl"
        >
          Czym są fiszki
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in cillum
          dolore eu fugiat nulla pariatur.
        </Text>
      </Flex>
    </Flex>
  );
}
