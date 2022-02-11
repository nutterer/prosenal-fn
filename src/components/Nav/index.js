import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

// Chakra-Ui
import { 
    Box,  
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    Button
} from '@chakra-ui/react'


function Nav() {
  return (
      <>
        <Box display='flex' justifyContent='space-around' borderRadius={5} bg='#9F7AEA' boxShadow='md'>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme='none'>
                        ข้อมูลบุคลากร
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuGroup>
                            <MenuItem>
                               <Link to='/personel'>
                                   ข้อมูลบุคลากร
                               </Link>                               
                            </MenuItem>
                            <MenuItem>
                                <Link to='/humanresources'>
                                    ข้อมูลอัตรากำลัง
                                </Link>
                            </MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme='none'>
                        การพัฒนาตนเอง
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuGroup>
                            <MenuItem>
                               <Link to='/meeting'>
                                   ข้อมูลการอบรม/สัมมนา/ดูงาน
                               </Link>                               
                            </MenuItem>
                            <MenuItem>
                                <Link to='/budget'>
                                    ข้อมูลการใช้งบประมาณพัฒนาศักยภาพ
                                </Link>
                            </MenuItem>
                            <MenuItem>
                               <Link to='#'>
                                   ข้อมูลการลาศึกษา
                               </Link>                               
                            </MenuItem>
                            <MenuItem>
                                <Link to='#'>
                                    ข้อมูลบุคลากรดีเด่น
                                </Link>
                            </MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme='none'>
                        ตำแหน่งทางวิชาการ
                    </MenuButton>
                    <MenuList minWidth='240px'>
                        <MenuGroup>
                            <MenuItem>
                               <Link to='#'>
                                   สถานะดำเนินการ
                               </Link>                               
                            </MenuItem>
                            <MenuItem>
                                <Link to='#'>
                                    เอกสารประกอบการสอน/คำสอน
                                </Link>
                            </MenuItem>
                            <MenuItem>
                               <Link to='#'>
                                   ผู้ดำรงตำแหน่งทางวิชาการ
                               </Link>                               
                            </MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
                <Menu>
                    <Button colorScheme='none'>
                        <Link to='/plan'>
                            แผนพัฒนาบุคลากร
                        </Link>
                    </Button>
                    <Button colorScheme='none'>
                        <Link to='#'>
                            รายงานผลการดำเนินงาน
                        </Link>
                    </Button>
                </Menu>
        </Box>
      </>
  );
}

export default Nav;
