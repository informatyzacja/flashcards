import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';

interface LayoutProps {
  children: React.ReactNode;
}

const GraySubtitledText = ({ children }: LayoutProps) => (
  <Text
    color="#575757"
    textAlign="center"
    fontSize="16px"
    fontStyle="normal"
    fontWeight="400"
    lineHeight="normal"
  >
    {children}
  </Text>
);

const CustomBlueText = ({ children }: LayoutProps) => (
  <Text
    color="rgba(0, 109, 206, 0.90)"
    textAlign="center"
    fontSize="20px"
    fontStyle="normal"
    fontWeight="400"
    lineHeight="normal"
  >
    {children}
  </Text>
);

const CustomButton = ({ children }: LayoutProps) => (
  <Button
    w="309px"
    h="59px"
    margin={2}
    borderRadius="15px"
    background="#FFF"
    boxShadow="0px 2px 4px 0px rgba(0, 0, 0, 0.25)"
  >
    {children}
  </Button>
);

export default function EndPage() {
  return (
    <Flex marginTop={40} alignContent="center" justifyContent="center">
      <Center
        w="866px"
        h="413px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRadius="15px"
        background="linear-gradient(151deg, rgba(136, 56, 255, 0.3) 0%, rgba(91, 219, 255, 0.3) 100%)"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.50)"
      >
        <Box w="418px" h="101px">
          <Text
            color="#6510E3"
            textAlign="center"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="normal"
            marginBottom={2}
          >
            Opanowałeś wszystkie pytania!
          </Text>

          <GraySubtitledText>Czas: 12:34:22</GraySubtitledText>

          <GraySubtitledText>
            Procent poprawnych odpowiedzi: 3%
          </GraySubtitledText>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center">
          <CustomButton>
            <CustomBlueText>Spróbuj jeszcze raz</CustomBlueText>
          </CustomButton>

          <CustomButton>
            <CustomBlueText>Wyjdź</CustomBlueText>
          </CustomButton>
        </Box>
      </Center>
    </Flex>
  );
}
