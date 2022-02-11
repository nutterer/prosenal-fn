import React from 'react';
import { Box } from '@chakra-ui/react'

function ContentLayout({ children, height, padding }) {
  return (
      <>
        <Box margin={10} h={height} padding={padding} border='2px' borderColor='gray.200' borderRadius={5}>
            <main>{children}</main>
        </Box>
      </>
  );
}

export { ContentLayout };
