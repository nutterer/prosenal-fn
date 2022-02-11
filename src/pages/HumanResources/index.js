import React from 'react';
import { MainLayout, ContentLayout } from '../../layout'
import { TableHR } from '../../components'

import { Grid, GridItem, Text, Center } from '@chakra-ui/react'

function HumanResources() {
  return (
      <>
        <MainLayout>
            <Grid templateColumns='repeat(4, 1fr)'>
                <GridItem colSpan={1}>
                    <ContentLayout height={'100vh'}>
                        HR
                    </ContentLayout>
                </GridItem>
                <GridItem colSpan={3}>
                    <ContentLayout height={'100vh'} padding={10}>
                        <Center><Text fontSize='xl' fontWeight='bold'>ข้อมูลอัตรากำลังสายวิชาการ ประจำปี</Text></Center>
                        {/* <TableHR /> */}
                    </ContentLayout>
                </GridItem>
            </Grid>
        </MainLayout>
      </>
  );
}

export default HumanResources;
