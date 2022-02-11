import React, { useState } from 'react';
import { MainLayout, ContentLayout } from '../../layout'
import { TableBuget } from '../../components'

import { Grid, GridItem, MenuItem, Button, Menu, Text, Center, Box } from '@chakra-ui/react'

import data from '../../mock/budget.json'
import Dpet from '../../mock/budget_depart.json'

function Budget() {
    const [ Fildepartment, SetDepartment ] = useState('คอมพิวเตอร์ธุรกิจ')

    const DeptMNav = Dpet.map(( rs, index ) => {
        return (
          <MenuItem key={index}>
            <Button variant='ghost' onClick={function(){
              SetDepartment(rs.department)
            }} >
                {rs.department}
            </Button>
          </MenuItem>
        )
      })
  return (
      <>
        <MainLayout>
            <Grid templateColumns='repeat(4, 1fr)'>
                <GridItem colSpan={1}>
                    <ContentLayout height={'100vh'}>
                        <Box padding={10}>
                            <Text padding={3} borderRadius={15} backgroundColor='#268578' fontWeight='bold' fontSize='2xl'>
                                <Center>ข้อมูลการใช้งบประมาณพัฒนาศักยภาพบุคลากร</Center>
                            </Text>
                            <Menu>
                                {DeptMNav}
                            </Menu>
                        </Box>
                    </ContentLayout>
                </GridItem>
                <GridItem colSpan={3}>
                    <ContentLayout height={'100vh'} padding={10}>
                        <TableBuget data={data} fil={Fildepartment}/>
                    </ContentLayout>
                </GridItem>
            </Grid>
        </MainLayout>
      </>
  );
}

export default Budget;
