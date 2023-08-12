import { Flex, Stack, Text } from '@chakra-ui/react';
import React from 'react';

import { DropZone } from '@/components/Dropzone';
import { FileList } from '@/components/FileList';

export default function Home() {
  const [isDropActive, setIsDropActive] = React.useState(false);

  const [files, setFiles] = React.useState<File[]>([]);

  const onDragStateChange = React.useCallback((dragActive: boolean) => {
    setIsDropActive(dragActive);
  }, []);

  const onFilesDrop = React.useCallback((myFiles: File[]) => {
    setFiles(myFiles);
  }, []);

  return (
    <Flex gap="100">
      <FileList files={files} />

      <DropZone
        onDragStateChange={onDragStateChange}
        onFilesDrop={onFilesDrop}
      />

      <Stack direction="column" w="362px" h="114px" gap="25" mt="50px">
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
