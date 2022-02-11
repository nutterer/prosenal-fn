import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react'

import { MainLayout, ContentLayout } from '../../layout'
import { TblMeeting } from '../../components'

function Meeting() {
  return (
      <>
        <MainLayout>
            <Grid templateColumns='repeat(4, 1fr)'>
                <GridItem colSpan={1}>
                    <ContentLayout height={'100vh'}>
                        Meeting
                    </ContentLayout>
                </GridItem>
                <GridItem colSpan={3}>
                    <ContentLayout height={'100vh'}>
                        <TblMeeting />
                    </ContentLayout>
                </GridItem>
            </Grid>
        </MainLayout>
      </>
  );
}

export default Meeting;
