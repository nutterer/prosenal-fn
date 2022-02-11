import React from 'react';
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'

function PersonelCard({ data }) {
  return (
      <>
        <Box padding={5} >
            <Grid templateColumns='repeat(2,1fr)' >
                <GridItem colSpan={1}>
                    <Image src={data.image} w={150} h={150} alt={`image ${data.first_name} ${data.last_name}`}/>
                </GridItem>
                <GridItem colSpan={1}>
                    <Text>{data.first_name}{" "}{data.last_name}</Text>
                    {/* <Text>{data.position}</Text>
                    <Text>{data.position2}</Text>
                    <Text>{data.phone}</Text>
                    <Text>{data.email_up}</Text> */}
                </GridItem>
            </Grid>
        </Box>
      </>
  );
}

export { PersonelCard };
