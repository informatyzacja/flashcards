import { Box, Progress, Text } from '@chakra-ui/react';

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
    <Box marginBottom={12}>
      <Progress
        value={value}
        w="195px"
        h="7px"
        borderRadius="10px"
        bg={bg}
        colorScheme={colorScheme}
      />

      <Text
        marginTop={1}
        color="#313131"
        textAlign="center"
        fontSize="14px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="normal"
      >
        {description}
      </Text>
    </Box>
  );
};

