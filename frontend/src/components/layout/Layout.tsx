import { Container, VStack } from '@chakra-ui/react';
import { Lato } from 'next/font/google';
import type React from 'react';

import Navbar from '@/components/layout/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export default function Layout({ children }: LayoutProps) {
  return (
    <VStack minH="100vh" className={lato.variable} gap={0}>
      <Navbar />
      <Container
        minW="100vw"
        flex={1}
        px={0}
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="stretch"
      >
        {children}
      </Container>
    </VStack>
  );
}
