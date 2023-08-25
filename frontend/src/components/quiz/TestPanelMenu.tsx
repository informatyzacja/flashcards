import { Icon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import { Flex, Text } from '@chakra-ui/react';
import React from "react";
import { FiLogOut } from "react-icons/fi";

import { ProgressWithDescription } from "@/components/quiz/ProgressWithDescription";

export default function TestPanelMenu() {
  return (
    <Flex
      maxW={{ base: '100%', md: 'sm' }}
      mt={{ base: 8, md: 0 }}
      flex="auto"
      minH="100%"
      background="#E3F5FF"
      justifyContent="space-around"
      alignItems="center"
      flexDirection={{ base: 'row', md: 'column' }}
      py={{ base: 2, md: 8 }}
    >
      <Flex direction="column" justifyContent="space-around" alignItems="center">
        <Text fontSize={{ base: '2xl', sm: '4xl' }} fontWeight="900">00:00:34</Text>
        <Flex direction="column" gap={{ base: 2, md: 8 }}>
          <ProgressWithDescription
            description="Opanowane pytania: 123/456"
            bg="#a0cff8"
            colorScheme="blue"
            value={60}
          />

          <ProgressWithDescription
            description="Poprawne odpowiedzi: 321/654"
            bg="red"
            colorScheme="green"
            value={35}
          />
        </Flex>
      </Flex>
      <Flex justifyContent="space-around" gap={{ base: 4, sm: 8 }} direction={{ base: 'column', md: 'row' }}>
        <SettingsIcon boxSize={{ base: 6, sm: 8 }} color="blue.500"/>
        <InfoIcon boxSize={{ base: 6, sm: 8 }} color="blue.500"/>
        <Icon as={FiLogOut} boxSize={{ base: 6, sm: 8 }} color="blue.500"/>
      </Flex>
    </Flex>
  );
}
