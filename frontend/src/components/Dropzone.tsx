//reference: https://blog.alexdevero.com/react-file-dropzone/

import { Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import type { FileWithPath } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

export function DropZone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Center
      {...getRootProps({ className: 'dropzone' })}
      w="416px"
      h="407px"
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
          <input {...getInputProps()} />
          Upuść pliki tutaj lub kliknij by otworzyć folder
        </Text>
      </Flex>
      <ul>{files}</ul>
    </Center>
  );
}

DropZone.displayName = 'DropZone';
