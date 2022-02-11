import React from 'react';

import { MainLayout, ContentLayout } from '../../layout'
import { PDF } from '../../components'

import { Grid, GridItem, Box, Center, Text } from '@chakra-ui/react'

function Plan() {
  return (
      <>
        <MainLayout>
            <Grid templateColumns='repeat(4,1fr)'>
                <GridItem colSpan={1}>
                    <ContentLayout height='100vh'>
                        PDF
                    </ContentLayout>
                </GridItem>
                <GridItem colSpan={3}>
                    <ContentLayout height='100vh'>
                        <PDF />
                    </ContentLayout>
                </GridItem>
            </Grid>
        </MainLayout>
      </>
  );
}

export default Plan;
