import React from 'react';

import { Container, Box, Center, Text } from '@chakra-ui/react'

function Error() {
  return (
      <>
        <Container>
            <Center>
                <Box h='100vh' display='flex' justifyContent='center' flexDirection='column'>
                    <Text fontWeight='bold' fontSize='6xl'>
                        <Center>
                            404
                        </Center>
                    </Text>
                    <Text fontSize='xl'>
                        <Center>
                            Page Not Found!!
                        </Center>
                    </Text>
                </Box>
            </Center>
        </Container>
      </>
  );
}

export default Error;
