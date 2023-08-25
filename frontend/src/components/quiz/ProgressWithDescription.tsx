import { Flex, Progress, Text } from '@chakra-ui/react';

interface ProgressWithDescriptionProps {
  description: string;
  bg: string;
  colorScheme: string;
  value: number;
}

export const ProgressWithDescription = ({
  description,
  bg,
  colorScheme,
  value,
}: ProgressWithDescriptionProps) => {
  return (
    <Flex direction="column" justifyContent="center" gap={2}>
      <Progress
        value={value}
        maxW="md"
        minW="2xs"
        w="100%"
        h={{ base: 2, md: 3 }}
        borderRadius="lg"
        bg={bg}
        colorScheme={colorScheme}
      />

      <Text
        textAlign="center"
        fontSize={{ base: 'xs', md: 'sm' }}
      >
        {description}
      </Text>
    </Flex>
  );
};
