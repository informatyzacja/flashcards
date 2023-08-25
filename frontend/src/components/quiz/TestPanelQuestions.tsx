import { Button, Flex, Text } from '@chakra-ui/react';

export const AnswerButton = ({ text }: { text: string }) => {
  return (
    <Button
      minW="xm"
      maxW="md"
      px={8}
      py={4}
      h="fit-content"
      whiteSpace="normal"
    >
      <Text>
        {text}
      </Text>
    </Button>
  )
}

export default function TestPanelQuestions() {
  return (
    <Flex
      direction="column"
      flex={1}
      mt={8}
      gap={{ base: 8, md: 16 }}
      px={8}
      mb="auto"
    >
      <Flex justifyContent="center">
        <Text textAlign="center">
          Ania ma 20 jabłek i 4 siostry. Basia ma 3*10^23 gruszek oraz 20i + 6
          braci. Jeżeli podzielą owoce po równo to ile lat ma wszechświat? Nie
          używaj kalkulatora
        </Text>
      </Flex>
      <Flex
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        gap={{ base: 4, md: 8 }}
      >
        {["odpowiedz 1", "odpowiedz 2", "odpowiedz 3", "odpowiedz 4", "odpowiedz 5"].map((ans) => (
          <AnswerButton text={ans} key={ans} />
        ))}
      </Flex>
    </Flex>
  );
}
