import { Box, Button, Flex, Text } from '@chakra-ui/react';

import { SvgIcon } from './SvgIcon';

interface QuestionProps {
  text: string;
}

const Question = ({ text }: QuestionProps) => (
  <Button
    borderRadius="15px"
    border="2px solid rgba(0, 109, 206, 0.20)"
    bg="#E3F5FF"
    w="272px"
    h="45px"
    flexShrink="0"
    display="flex"
    justifyContent="center"
    alignItems="center"
    fontWeight="normal"
  >
    <Text>{text}</Text>
  </Button>
);

export default function TestPanelQuestions() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="fixed"
      left="0"
      top="0"
      height="100vh"
      width="69%"
    >
      <Box
        margin={2}
        marginTop={20}
        maxW={650}
        flexShrink="0"
        borderRadius="15px"
        border="3px dashed rgba(0, 109, 206, 0.80)"
        background="rgba(217, 217, 217, 0.00)"
        padding={2}
      >
        <Text
          marginLeft={10}
          marginRight={10}
          color="#575757"
          textAlign="justify"
          fontSize="17px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="normal"
        >
          Ania ma 20 jabłek i 4 siostry. Basia ma 3*10^23 gruszek oraz 20i + 6
          braci. Jeżeli podzielą owoce po równo to ile lat ma wszechświat? Nie
          używaj kalkulatora
        </Text>
      </Box>

      <Flex
        marginTop="10vh"
        marginLeft="16vh"
        marginRight="16vh"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={6}
        p={6}
      >
        <Question text="To jest odpowiedz do pytania" />
        <Question text="To jest odpowiedz do pytania" />
        <Question text="To jest odpowiedz do pytania" />
        <Question text="To jest odpowiedz do pytania" />
        <Question text="To jest odpowiedz do pytania" />
      </Flex>

      <Box marginTop={5}>
        <Flex position="absolute" right="0" p="4" bg="transparent">
          <Button
            w="61px"
            h="56px"
            flexShrink="0"
            borderRadius="10px"
            border="2px solid rgba(0, 109, 206, 0.20)"
            bg="#B2E3FF"
          >
            <SvgIcon
              w={44}
              h={36}
              d="M35.9016 0L32.037 4.03263L16.4666 19.603L11.9299 15.2344L7.89723 11.2017L0 19.099L4.03263 23.1316L12.4339 31.5329L16.2985 35.5655L20.3312 31.5329L39.9342 11.9299L43.9668 7.89723L35.9016 0Z"
            />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
}
