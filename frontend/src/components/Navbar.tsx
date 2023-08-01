import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'


export default function Nav() {
  return (
    <Box 
    bg='#2397FF' 
    px={10} 
    boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
    >
        <Flex h='60px' alignItems="center" justifyContent='space-between'>
          <Box>
            <Text 
            fontSize='40px' 
            as='b' 
            color='white'
            >
              fiszki
            </Text>
          </Box>
        </Flex>
      </Box>
  )
}