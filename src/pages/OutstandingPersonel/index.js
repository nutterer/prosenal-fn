import React from 'react';
import { MainLayout, ContentLayout } from '../../layout'
import {
  Grid,
  GridItem
} from '@chakra-ui/react'

function OutstandingPersonel() {
  return (
    <>
        <MainLayout>
          <Grid gridTemplateColumns='repeat(4, 1fr)' gap={4}>
            <GridItem colSpan={1}>
              <ContentLayout height={'100vh'}>
                ข้อมูลบุคลากรดีเด่น
              </ContentLayout>
            </GridItem>
            <GridItem colSpan={3}>
              <ContentLayout height={'100vh'}>
                OutstandingPersonel
              </ContentLayout>
            </GridItem>
          </Grid>
        </MainLayout>
    </>
  );
}

export default OutstandingPersonel;
