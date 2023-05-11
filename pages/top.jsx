import React from 'react'
import { Heading, Container, Input, Select, Icon, Button, Box } from '@chakra-ui/react'
// import { EditIcon} from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { SearchInput } from '@/top.component/searchInput'

function Top() {
  return (
    <div>
      <Box bg='#68D391' w='100%' p={4} >
      {/* <Container maxW='container.sm' bg='#68D391' > */}
        {/* containerの幅を広げたい */}
      <Heading as='h1' size='4xl' >TODO</Heading>
      {/* </Container> */}
      </Box>
      <Heading as='h2' size='1xl' >TODO LIST</Heading>
      <p>SEARCH</p>
      <SearchInput />
      {/* chakraとのデザインが合わない　chakraから引用すべきか */}
      {/* searchIconを中に入れる方法がわからない */}
      <p>STATUS</p>
      <Select placeholder='-------'>
        <option value='option1'>NOT STARTED</option>
        <option value='option2'>DOING</option>
        <option value='option3'>DONE</option>
      </Select>
      <p>PRIORITY</p>
      <Select placeholder='-------'>
        <option value='option1'>High</option>
        <option value='option2'>Middle</option>
        <option value='option3'>Low</option>
      </Select>
      <Button colorScheme='gray'>Reset</Button>
      {/* 色の指定をするとボタンが消える */}
      {/* <EditIcon /> */}
      {/* 該当のアイコンがない　モジュールインストール必要？ */}

      <TableContainer>
  <Table variant='unstyled'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Task</Th>
        <Th>Status</Th>
        <Th>Priority</Th>
        <Th>Create</Th>
        <Th>Update</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Github上に静的サイトをホスティングする</Td>
        <Td>ステータス</Td>
        <Td>選択できる</Td>
        <Td>日にち</Td>
        <Td>日にち</Td>
        <Td>ボタン</Td>
      </Tr>
      <Tr>
      <Td>ReactでTodoサイトを作成する</Td>
        <Td>ステータス</Td>
        <Td>選択できる</Td>
        <Td>日にち</Td>
        <Td>日にち</Td>
        <Td>ボタン</Td>
      </Tr>
      <Tr>
      <Td>Firestore Hostingを学習する</Td>
        <Td>ステータス</Td>
        <Td>選択できる</Td>
        <Td>日にち</Td>
        <Td>日にち</Td>
        <Td>ボタン</Td>
      </Tr>
      <Tr>
      <Td>感謝の正挙突き</Td>
        <Td>ステータス</Td>
        <Td>選択できる</Td>
        <Td>日にち</Td>
        <Td>日にち</Td>
        <Td>ボタン</Td>
      </Tr>
      <Tr>
      <Td>二重の極み</Td>
        <Td>ステータス</Td>
        <Td>選択できる</Td>
        <Td>日にち</Td>
        <Td>日にち</Td>
        <Td>ボタン</Td>
      </Tr>
      <Tr>
      <Td>魔封波
      </Td>
        <Td>ステータス</Td>
        <Td>選択できる</Td>
        <Td>日にち</Td>
        <Td>日にち</Td>
        <Td>ボタン</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default Top




