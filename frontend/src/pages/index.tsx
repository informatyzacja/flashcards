import { Center, Flex, Stack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex>
      <Center
        w="416px"
        h="407px"
        mt="90px"
        bgGradient="linear(111.27deg, rgba(136, 56, 255, 0.1) 32.04%, rgba(91, 219, 255, 0.1) 79.8%)"
        borderRadius="15px"
        border="3px"
        borderStyle="dashed"
        borderColor="#6510E3"
      >
        <Flex w="169px" h="72px">
          <Text
            fontSize="20px"
            fontWeight="400"
            lineHeight="24px"
            color="#006DCEE5"
            align="center"
          >
            Upuść pliki tutaj lub kliknij by otworzyć folder
          </Text>
        </Flex>
      </Center>

      <Stack direction="column" w="362px" h="114px" mt="158px" ml="70px">
        <Text
          fontSize="24px"
          fontWeight="400"
          lineHeight="28.8px"
          color="#6510E3"
        >
          Czym są fiszki?
        </Text>
        <Text
          fontSize="16px"
          fontWeight="400"
          lineHeight="19.2px"
          color="#575757"
          justifyContent="justified"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in cillum
          dolore eu fugiat nulla pariatur.
        </Text>
      </Stack>
    </Flex>
  );
}
