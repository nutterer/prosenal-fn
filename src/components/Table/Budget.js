import React from 'react';

import { Table, Thead, Tbody, Tr, Td, Th, Center } from '@chakra-ui/react'
function TableBuget({ data, fil }) {
    const Tbdata = data.sort(function (a, b) {
                  return b.year - a.year;
                }).filter((rs) => rs.department === fil).map(( rs, index ) => {
        return (
            <Tr key={index}>
                <Td><Center>{rs.year}</Center></Td>
                <Td><Center>{rs.startbudget}</Center></Td>
                <Td><Center>{rs.totalbudget}</Center></Td>
                <Td><Center>{rs.startbudget - rs.totalbudget}</Center></Td>
            </Tr>
        )
    })
  return (
      <>
        <Table>
            <Thead>
                <Tr>
                    <Th><Center>ปีงบประมาณ</Center></Th>
                    <Th><Center>งบประมาณตั้งต้น</Center></Th>
                    <Th><Center>ใช้งบประมาณทั้งสิ้น</Center></Th>
                    <Th><Center>คงเหลือ</Center></Th>
                </Tr>
            </Thead>
            <Tbody>
                {Tbdata}
            </Tbody>
        </Table>
      </>
  );
}

export { TableBuget };
