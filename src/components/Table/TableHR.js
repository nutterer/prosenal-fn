import React from 'react';

import { Table, Thead, TBody, Tr, Td, Th, Center, Tbody } from '@chakra-ui/react'

function TableHR({ data, fil }) {

    const Tbdata = data.map(( rs, index ) => {
        return (
        <Tr key={index}>
            <Td><Center>{rs.department}</Center></Td>
            <Td><Center>{rs.masterdegree}</Center></Td>
            <Td><Center>{rs.phddegree}</Center></Td>
            <Td><Center>{rs.exteacher}</Center></Td>
            <Td><Center>{rs.teacher}</Center></Td>
            <Td><Center>{rs.asst}</Center></Td>
            <Td><Center>{rs.assoc}</Center></Td>
            <Td><Center>{rs.onsite}</Center></Td>
            <Td><Center>{rs.sdleave}</Center></Td>
            <Td><Center>{rs.exteacher + rs.teacher + rs.asst + rs.assoc}</Center></Td>
        </Tr>
        )
        })
  return (
      <>
        <Table>
            <Thead>
                <Tr>
                    <Th rowSpan={2}><Center>สาขาวิชา</Center></Th>
                    <Th colSpan={2}><Center>ระดับการศึกษา</Center></Th>
                    <Th rowSpan={2}><Center>ผู้ช่วยสอน</Center></Th>
                    <Th rowSpan={2}><Center>อาจารย์</Center></Th>
                    <Th colSpan={2}><Center>ตำแหน่งทางวิชาการ</Center></Th>
                    <Th colSpan={2}><Center>สถานะ</Center></Th>
                    <Th rowSpan={2}><Center>รวม</Center></Th>
                </Tr>
                <Tr>
                    <Th><Center>ปริญญาโท</Center></Th>
                    <Th><Center>ปริญญาเอก</Center></Th>
                    <Th><Center>ผศ.</Center></Th>
                    <Th><Center>รศ.</Center></Th>
                    <Th><Center>ปฏิบัติงาน</Center></Th>
                    <Th><Center>ลาศึกษา</Center></Th>
                </Tr>
            </Thead>
            <Tbody>
                {Tbdata}
            </Tbody>
        </Table>
      </>
  );
}

export { TableHR };
