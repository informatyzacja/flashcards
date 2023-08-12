//reference: https://blog.alexdevero.com/react-file-dropzone/

import { Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export interface DropZoneProps {
  onDragStateChange?: (isDragActive: boolean) => void;
  onDrag?: () => void;
  onDragIn?: () => void;
  onDragOut?: () => void;
  onDrop?: () => void;
  onFilesDrop?: (files: File[]) => void;
}

export const DropZone = React.memo(
  (props: React.PropsWithChildren<DropZoneProps>) => {
    const {
      onDragStateChange,
      onFilesDrop,
      onDrag,
      onDragIn,
      onDragOut,
      onDrop,
    } = props;

    const [isDragActive, setIsDragActive] = React.useState(false);

    const dropZoneRef = React.useRef<HTMLDivElement | null>(null);

    const handleDragIn = React.useCallback(
      (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        onDragIn?.();

        if (event.dataTransfer === null) {
          alert('event.dataTransfer is null');
        } else {
          if (event.dataTransfer.items.length > 0) {
            setIsDragActive(true);
          }
        }
      },
      [onDragIn],
    );

    const handleDragOut = React.useCallback(
      (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        onDragOut?.();

        setIsDragActive(false);
      },
      [onDragOut],
    );

    const handleDrag = React.useCallback(
      (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        onDrag?.();
        if (!isDragActive) {
          setIsDragActive(true);
        }
      },
      [isDragActive, onDrag],
    );

    const handleDrop = React.useCallback(
      (event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();

        setIsDragActive(false);
        onDrop?.();

        if (event.dataTransfer === null) {
          alert('event.dataTransfer is null');
        } else {
          if (event.dataTransfer.files.length > 0) {
            const fileList = event.dataTransfer.files;

            const files: File[] = [...fileList];

            onFilesDrop?.(files);
            event.dataTransfer.clearData();
          }
        }
      },
      [onDrop, onFilesDrop],
    );

    React.useEffect(() => {
      onDragStateChange?.(isDragActive);
    }, [isDragActive, onDragStateChange]);

    React.useEffect(() => {
      const tempZoneRef = dropZoneRef.current;
      if (tempZoneRef) {
        tempZoneRef.addEventListener('dragenter', handleDragIn);
        tempZoneRef.addEventListener('dragleave', handleDragOut);
        tempZoneRef.addEventListener('dragover', handleDrag);
        tempZoneRef.addEventListener('drop', handleDrop);
      }

      return () => {
        tempZoneRef?.removeEventListener('dragenter', handleDragIn);
        tempZoneRef?.removeEventListener('dragleave', handleDragOut);
        tempZoneRef?.removeEventListener('dragover', handleDrag);
        tempZoneRef?.removeEventListener('drop', handleDrop);
      };
    }, [handleDrag, handleDragIn, handleDragOut, handleDrop]);

    return (
      <Center
        ref={dropZoneRef}
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
            Upuść pliki tutaj lub kliknij by otworzyć folder
          </Text>
        </Flex>
      </Center>
    );
  },
);

DropZone.displayName = 'DropZone';
