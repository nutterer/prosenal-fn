import React from 'react';

import { Box, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
      <>
        <Box display='flex' justifyContent='end' h='100%' borderTop='2px' borderColor='gold'>
            <Text padding='2' fontSize='sm'>
                หน่วยบุคคล คณะเทคโนโลยีสารสนเทศและการสื่อสาร มหาวิทยาลัยพะเยา
            </Text>
        </Box>
      </>
  );
}

export default Footer;
