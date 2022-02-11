import React, { useState } from 'react';
import { Grid, GridItem, Box, Text, Center, Menu, MenuItem, Button} from '@chakra-ui/react'

import { MainLayout, ContentLayout } from '../../layout'
import { PersonelCard } from '../../components'
import data from '../../mock/user.json'
import faculty from '../../mock/department_faculty.json'
import deptjob from '../../mock/department_jobs.json'


function Personel() {
  const [ Filfaculty, setFaculty ] = useState('คอมพิวเตอร์ธุรกิจ')
  console.log(Filfaculty);
  const FacNav = faculty.map(( rs, index ) => {
    return (
      <MenuItem key={index}>
        <Button variant='ghost' onClick={function(){
          setFaculty(rs.department)
        }} >
            {rs.department}
        </Button>
      </MenuItem>
    )
  })
  const DeptMNav = deptjob.map(( rs, index ) => {
    return (
      <MenuItem key={index}>
        <Button variant='ghost' onClick={function(){
          setFaculty(rs.department)
        }} >
            {rs.department}
        </Button>
      </MenuItem>
    )
  })
  return (
    <>
        <MainLayout>
          <Grid gridTemplateColumns='repeat(4, 1fr)' gap={4}>
            <GridItem colSpan={1}>
              <ContentLayout height={'100vh'}>
                <Box padding={10}>
                  <Text 
                    padding={3} 
                    borderRadius={15} 
                    backgroundColor='#268578' 
                    fontSize='2xl' 
                    fontWeight='bold'
                  >
                    <Center>
                      <Text>
                        ข้อมูลบุคลากร
                      </Text>
                    </Center>
                  </Text>
                  <Box marginTop={15}>
                    <Box>
                      <Text 
                        fontSize='large' 
                        fontWeight='bold'
                      >
                        <Center>
                          บุคลากรสายวิชาการ
                        </Center>
                      </Text>
                      <Box>
                        <Menu>
                          {FacNav}
                        </Menu>
                      </Box>
                    </Box>
                    <Box marginTop={15}>
                      <Text  
                        fontSize='large' 
                        fontWeight='bold'
                      >
                        <Center>
                          บุคลากรสายสนับสนุน
                        </Center>
                      </Text>
                      <Box>
                        <Menu>
                          {DeptMNav}
                        </Menu>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </ContentLayout>
            </GridItem>
            <GridItem colSpan={3}>
              <ContentLayout height={'100vh'}>
                <Box padding={10}>
                  <Grid templateColumns='repeat(3, 1fr)' gap={10} rowGap={4}>
                    {data.filter((rs) => rs.department === Filfaculty).map((rs, index) => {
                      return (
                        <GridItem key={index}>
                          <PersonelCard data={rs} />
                        </GridItem>
                      )
                    })}
                  </Grid>
                </Box>
              </ContentLayout>
            </GridItem>
          </Grid>
        </MainLayout>
    </>
  );
}

export default Personel;
