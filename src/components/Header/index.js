import { Grid, GridItem, Box, Image, Menu, MenuItem, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



import Logo from '../../psLogo.png'

import Nav from '../Nav';

export const Header = () => {
    const [ user, SetUser ] = useState({username:'Thanakorn'})
    // console.log(user);
    const navigate = useNavigate()
  return (
      <>
        <Grid alignItems='center' templateColumns='repeat(4, 1fr)' gap={2}>
            <GridItem padding={5} colSpan={1}>
                <Image src={Logo} objectFit='fill' alt="Logo" />
            </GridItem>
            <GridItem padding={10} colSpan={3}>
                <Grid alignItems='center' templateColumns='repeat(10,1fr)'>
                    <GridItem colSpan={9}>
                        <Box display='flex' justifyContent='end'>
                            <Text>ผู้ใช้งาน : {user.username} xxxxx</Text> 
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Menu>
                            <MenuItem justifyContent='center'>
                                <Button variant='ghost' onClick={function (){
                                    navigate('/login')
                                    SetUser(null)
                                }}>
                                    <Text>ออกจากระบบ</Text>
                                </Button>
                            </MenuItem>
                        </Menu>
                    </GridItem>
                </Grid>
                <Nav/>
            </GridItem>
        </Grid>
      </>
  );
}

export default Header;
