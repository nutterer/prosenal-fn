import React from 'react';

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    Th,
    Center
} from '@chakra-ui/react'

function TblMeeting({ data }) {
    // const Tbldata = data.map(( rs, index) => {
    //     return (
    //         <Tr key={index}>
    //             <Td><Center>{rs.department}</Center></Td>
    //             <Td><Center>{rs.total}</Center></Td>
    //             <Td><Center>{rs.pTrain}</Center></Td>
    //             <Td><Center>{rs.tTrain}</Center></Td>
    //             <Td><Center>{rs.pSeminar}</Center></Td>
    //             <Td><Center>{rs.tSeminar}</Center></Td>
    //             <Td><Center>{rs.pObserve}</Center></Td>
    //             <Td><Center>{rs.tObserve}</Center></Td>
    //         </Tr>
    //     )
    // })
  return (
      <>
        <Table>
            <Thead>
                <Tr>
                    <Th rowSpan={2}><Center>สังกัด</Center></Th>
                    <Th rowSpan={2}><Center>จำนวนเต็ม</Center></Th>
                    <Th colSpan={2}><Center>อบรม</Center></Th>
                    <Th colSpan={2}><Center>สัมมนา</Center></Th>
                    <Th colSpan={2}><Center>ดูงาน</Center></Th>
                </Tr>
                <Tr>
                    <Th><Center>คน</Center></Th>
                    <Th><Center>ครั้ง</Center></Th>
                    <Th><Center>คน</Center></Th>
                    <Th><Center>ครั้ง</Center></Th>
                    <Th><Center>คน</Center></Th>
                    <Th><Center>ครั้ง</Center></Th>
                </Tr>
            </Thead>
        </Table>
      </>
  );
}

export { TblMeeting };
