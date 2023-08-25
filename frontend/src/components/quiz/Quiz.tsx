import { Flex } from "@chakra-ui/react";

import TestPanelMenu from './TestPanelMenu';
import TestPanelQuestions from './TestPanelQuestions';

export default function Quiz() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} flex={1} minH="100%">
      <TestPanelQuestions/>
      <TestPanelMenu/>
    </Flex>
  );
}
