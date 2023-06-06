import React, { useState, useEffect } from "react";
import { Heading, Select, Box, Flex, Spacer } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import { SearchInput } from "../topComponent/searchInput";
import { ResetButton } from "../topComponent/resetButton";
// import { status } from '@/config/todo'

//新規追加分(Read)
import Link from "next/link";
import { useTodo } from "../hooks/useTodo";
import { DateDisplay } from "../components/DateDisplay";
import { TodoHeader } from "@/components/header";

function Top() {
  const status = [
    {
      text: "not started",
      backgroundColor: "green.100",
      color: "blackAlpha.800",
      word: "NOT STARTED",
    },

    {
      text: "doing",
      backgroundColor: "green.600",
      color: "white",
      word: "DOING",
    },

    {
      text: "done",
      backgroundColor: "green.300",
      color: "blackAlpha.800",
      word: "DONE",
    },
  ];

  // const [todos, setTodos] = useState([]);
  const { todos, setTodos, readData } = useTodo();

  const [todoSearchTitle, setTodoSearchTitle] = useState("");
  const [todoId, setTodoId] = useState(todos.length + 1);
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [filter, setFilter] = useState("-------");
  const [filter2, setFilter2] = useState("-------");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filteredTodos2, setFilteredTodos2] = useState([]);

  //削除ボタン関数
  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo));
  };

  //編集ボタン関数
  const handleOpenEditPage = (todo) => {
    setIsEditable(true);
    setEditId(todo.id);
    setNewTitle(todo.title); //必要？
  };

  // const handleEditTodo = () => {
  //   const newArray = todos.map((todo) =>
  //   todo.id === editId? {...todo, title:newTitle} : todo)setTodos(newArray)
  //   setNewTitle('')
  //   setEditId('')
  // }

  const handleStatusChange = (targetTodo, e) => {
    const newArray = todos.map((todo) =>
      todo.id === targetTodo.id ? { ...todo, status: e.target.value } : todo
    );
    setTodos(newArray);
  };
  const handlePriorityChange = (targetTodo, e) => {
    const newArray = todos.map((todo) =>
      todo.id === targetTodo.id ? { ...todo, priority: e.target.value } : todo
    );
    setTodos(newArray);
  };

  //STATUS
  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "notStarted":
          setFilteredTodos(
            todos.filter((todo) => todo.status === "not started")
          );
          break;
        case "doing":
          setFilteredTodos(todos.filter((todo) => todo.status === "doing"));
          break;
        case "done":
          setFilteredTodos(todos.filter((todo) => todo.status === "done"));
          break;
        default:
          setFilteredTodos(todos);
      }
    };
    filteringTodos();
  }, [filter, todos]);

  //PRIORITY
  useEffect(() => {
    const filteringTodos2 = () => {
      switch (filter2) {
        case "high":
          setFilteredTodos2(todos.filter((todo) => todo.status === "high"));
          break;
        case "middle":
          setFilteredTodos2(todos.filter((todo) => todo.status === "middle"));
          break;
        case "low":
          setFilteredTodos2(todos.filter((todo) => todo.status === "low"));
          break;
        default:
          setFilteredTodos2(todos);
      }
    };
    filteringTodos2();
  }, [filter2, todos]);

  // const handleSearchFormChanges = (e) => {
  //   setTodoSearchTitle(e.target.value)
  // }

  //Read(ここから)///////////////////////////
  useEffect(() => {
    readData();
  }, []);

  //Read(ここまで)////////////////////////////

  return (
    <div>
      <TodoHeader />

      <Box maxW="1080px" m="0 auto">
        <Heading as="h2" size="2xl" mt="2">
          TODO LIST
        </Heading>
        <Box display="flex" mt="32px" mb="32px">
          <Box>
            <p>SEARCH</p>
            <SearchInput
              todoSearchTitle={todoSearchTitle}
              setTodoSearchTitle={setTodoSearchTitle}
            />
          </Box>
          <Box ml="15px">
            <p>STATUS</p>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">-------</option>
              <option value="notStarted">NOT STARTED</option>
              <option value="doing">DOING</option>
              <option value="done">DONE</option>
            </Select>
          </Box>
          <Box ml="15px">
            <p>PRIORITY</p>
            <Select
              value={filter2}
              onChange={(e) => setFilter2(e.target.value)}
            >
              <option value="all">-------</option>
              <option value="high">High</option>
              <option value="middle">Middle</option>
              <option value="low">Low</option>
            </Select>
          </Box>
          <ResetButton />
          <Spacer />
          <Box mt="10">
            <EditIcon />
          </Box>
        </Box>

        <TableContainer>
          <Table size="sm" variant="simple">
            <Thead size="3xl" bg="#68D391" height="16">
              <Tr>
                <Th textAlign="center" fontSize="2xl" textTransform="none">
                  Task
                </Th>
                <Th textAlign="center" fontSize="2xl" textTransform="none">
                  Status
                </Th>
                <Th textAlign="center" fontSize="2xl" textTransform="none">
                  Priority
                </Th>
                <Th textAlign="center" fontSize="2xl" textTransform="none">
                  Create
                </Th>
                <Th textAlign="center" fontSize="2xl" textTransform="none">
                  Update
                </Th>
                <Th textAlign="center" fontSize="2xl" textTransform="none">
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredTodos.map((todo) => (
                //filteredTodos2もしたい
                <Tr key={todo.id}>
                  <Td fontWeight="bold">{todo.title}</Td>

                  <Td>
                    <Select
                      //?はオプショナルチェーン演算子
                      bg={
                        status.find((value) => todo.status === value.text)
                          ?.backgroundColor
                      }
                      color={
                        status.find((value) => todo.status === value.text)
                          ?.color
                      }
                      borderColor="blackAlpha.800"
                      borderRadius="full"
                      value={todo.status}
                      onChange={(e) => handleStatusChange(todo, e)}
                      fontWeight="bold"
                    >
                      {status.map((value) => (
                        <option key={value.text} value={value.text}>
                          {value.word}
                        </option>
                      ))}
                    </Select>
                  </Td>

                  <Td>
                    <Select
                      borderColor="tomato"
                      value={todo.priority}
                      onChange={(e) => handlePriorityChange(todo, e)}
                    >
                      <option value="high">High</option>
                      <option value="middle">Middle</option>
                      <option value="low">Low</option>
                    </Select>
                  </Td>

                  <Td textAlign="center" fontWeight="bold">
                    <DateDisplay date={todo.createDate} />
                  </Td>

                  <Td textAlign="center" fontWeight="bold">
                    <DateDisplay date={todo.updateDate} />
                  </Td>

                  <Td>
                    <Flex justifyContent="center">
                      <button
                        style={{ display: "inline-block", marginRight: "10px" }}
                        ml="150px"
                        onClick={() => handleOpenEditPage(todo)}
                      >
                        <EditIcon />
                        {/* たぶんこんな感じ */}
                        {/* <Link href={{pathname: `/edittodo/[id]`}}>
                          <EditIcon />
                        </Link> */}
                      </button>
                      <button onClick={() => handleDeleteTodo(todo)} ml={5}>
                        <DeleteIcon />
                      </button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default Top;
