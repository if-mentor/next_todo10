import React, { useState, useEffect } from 'react'
import { Heading, Container, Input, Select, Icon, Button, Box, Flex } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
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
import { ResetButton } from '@/top.component/resetButton'

function Top() {

  const [todos, setTodos] = useState([
    { id: 1,
      title: "Github上に静的サイトをホスティングする",
      status: "not started",
      priority: "high",
      createDate: "date",
      updateDate: "date",
      action: "icons",
    },
    { id: 2,
      title: "ReactでTodoサイトを作成する",
      status: "doing",
      priority: "low",
      createDate: "date",
      updateDate: "date",
      action: "icons",
    },
    { id: 3,
      title: "Firestore Hostingを学習する",
      status: "done",
      priority: "middle",
      createDate: "date",
      updateDate: "date",
      action: "icons",
    },
    { id: 4,
      title: "感謝の正挙突き",
      status: "doing",
      priority: "high",
      createDate: "date",
      updateDate: "date",
      action: "icons",
    },
    { id: 5,
      title: "二重の極み",
      status: "done",
      priority: "high",
      createDate: "date",
      updateDate: "date",
      action: "icons",
    },
    { id: 6,
      title: "魔封波",
      status: "doing",
      priority: "low",
      createDate: "date",
      updateDate: "date",
      action: "icons",
    }
  ])

  const [todoSearchTitle, setTodoSearchTitle] = useState('');
  const [todoId, setTodoId] = useState(todos.length +1)
  const [isEditable, setIsEditable] = useState(false)
  const[editId, setEditId] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [filter, setFilter] = useState('-------')
  const [filter2, setFilter2] = useState('-------')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filteredTodos2, setFilteredTodos2] = useState([])

  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !==targetTodo))
  }
  const handleOpenEditPage = (todo) => {
    setIsEditable(true)
    setEditId(todo.id)
    setNewTitle(todo.title) //必要？
  }
  // const handleEditTodo = () => {
  //   const newArray = todos.map((todo) =>
  //   todo.id === editId? {...todo, title:newTitle} : todo)setTodos(newArray)
  //   setNewTitle('')
  //   setEditId('')
  // }

  const handleStatusChange = (targetTodo, e) => {
    const newArray = todos.map((todo) => todo.id === targetTodo.id ? {...todo, status:e.target.value } : todo )
    setTodos(newArray)
  }
  const handlePriorityChange = (targetTodo, e) => {
    const newArray = todos.map((todo) => todo.id === targetTodo.id ? {...todo, priority:e.target.value } : todo )
    setTodos(newArray)
  }

  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case 'notStarted':
          setFilteredTodos(todos.filter((todo) => todo.status === 'notStarted'))
          break
        case 'doing':
            setFilteredTodos(todos.filter((todo) => todo.status === 'doing'))
            break
        case 'done':
            setFilteredTodos(todos.filter((todo) => todo.status === 'done'))
            break
            default:
              setFilteredTodos(todos)
          }
        }
        filteringTodos()
  }, [filter, todos])

  useEffect(() => {
    const filteringTodos2 = () => {
      switch (filter2) {
        case 'high':
          setFilteredTodos2(todos.filter((todo) => todo.status === 'high'))
          break
        case 'middle':
            setFilteredTodos2(todos.filter((todo) => todo.status === 'middle'))
            break
        case 'low':
            setFilteredTodos2(todos.filter((todo) => todo.status === 'low'))
            break
            default:
              setFilteredTodos2(todos)
          }
        }
        filteringTodos2()
  }, [filter2, todos])
  

  // const handleSearchFormChanges = (e) => {
  //   setTodoSearchTitle(e.target.value)
  // }

  return (
    <>
    {isEditable ? (編集ページ):
    <div>
      <Box bg='#68D391' w='100%' p={4} >
      {/* <Container maxW='container.sm' bg='#68D391' > */}
        {/* containerの幅を広げたい */}
      <Heading as='h1' size='4xl' >TODO</Heading>
      {/* </Container> */}
      </Box>
      <Box maxW='1080px' m='0 auto'>
      <Heading as='h2' size='2xl' >TODO LIST</Heading>
      <Box display='flex' mt='32px' mb='32px'>
        <Box>
          <p>SEARCH</p>
          <SearchInput todoSearchTitle={todoSearchTitle} setTodoSearchTitle={setTodoSearchTitle} />
        </Box>
        <Box>
          <p>STATUS</p>
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value='all'>-------</option>
            <option value='notStarted'>NOT STARTED</option>
            <option value='doing'>DOING</option>
            <option value='done'>DONE</option>
          </Select>
        </Box>
        <Box>
          <p>PRIORITY</p>
          <Select value={filter2} onChange={(e) => setFilter2(e.target.value)}>
            <option value='all'>-------</option>
            <option value='high'>High</option>
            <option value='middle'>Middle</option>
            <option value='low'>Low</option>
          </Select>
        </Box>
      <ResetButton />
      <Box ml='80px'>
      <EditIcon />
      </Box>
      </Box>
      {/* リセットボタンが出ない */}
      
      {/* 該当のアイコンがない　モジュールインストール必要？ */}

      <TableContainer>
  <Table size='sm' variant='simple'>
    <Thead fontSize='3xl' bg='#68D391'>
      {/* 文字サイズが変わらない */}
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
      {filteredTodos.map((todo)=> (
        //filteredTodos2もしたい
        <Tr key={todo.id}>
          <Td>{todo.title}</Td>
          {/* <Td>{todo.status}</Td> */}
          <Td>
            <Select bg='#68D391'
                    borderColor='black'
                    // ベースの色にしたい
                    color='white' 
                    borderRadius='full'
                    value={todo.status} 
                    onChange={(e) => handleStatusChange(todo, e)}
            >
              {/* statusに合わせてデザイン変更したい */}
              <option value='notStarted'>NOT STARTED</option>
              <option value='doing'>DOING</option>
              <option value='done'>DONE</option>
            </Select>
          </Td>
          {/* <Td>{todo.priority}</Td> */}
          <Td>
            <Select borderColor='tomato' value={todo.priority} onChange={(e) => handlePriorityChange(todo, e)}>
              <option value='high'>High</option>
              <option value='middle'>Middle</option>
              <option value='low'>Low</option>
            </Select>
          </Td>

          <Td>{todo.createDate}</Td>
          <Td>{todo.updateDate}</Td>
          {/* <Td>{todo.action}</Td> */}
          <Td>
            <button onClick={() =>handleOpenEditPage(todo)}><EditIcon /></button>
            {/* ボタンの隙間を開けたい　ml={5}効かない */}
            <button onClick={() => handleDeleteTodo(todo)} ml={5}><DeleteIcon /></button>
          </Td>
        </Tr>
      ))}
    </Tbody>
    <Tfoot> 
    </Tfoot>
  </Table>
</TableContainer>
</Box>
    </div>}
    </>
  )
}

export default Top



