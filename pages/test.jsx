/**
 * top.jsxのコピーページです。
 * 後で消します。
 *
 * 追加の場合
 * state（空） -> 入力 -> collection
 *
 * 読み取りの場合
 * collection -> stateに入れる(todos) -> 表示
 * todos -> filter -> 表示
 * useEffectのタイミングはどこ。。。
 */

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
import { db } from "../libs/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Test = () => {
  //   const [filteredTodos, setFilteredTodos] = useState([]);
  const [todos, setTodos] = useState([]);

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

  //   useEffect(() => {
  //     const filteringTodos = () => {
  //       switch (filter) {
  //         case "notStarted":
  //           setFilteredTodos(
  //             todos.filter((todo) => todo.status === "not started")
  //           );
  //           break;
  //         case "doing":
  //           setFilteredTodos(todos.filter((todo) => todo.status === "doing"));
  //           break;
  //         case "done":
  //           setFilteredTodos(todos.filter((todo) => todo.status === "done"));
  //           break;
  //         default:
  //           setFilteredTodos(todos);
  //       }
  //     };
  //     filteringTodos();
  //   }, [filter, todos]);

  //Read(ここから)///////////////////////////
  useEffect(() => {
    readData();
  }, []);

  const readData = async () => {
    const todoData = collection(db, "todos");
    onSnapshot(todoData, (snapshot) => {
      const newTodos = [];
      snapshot.docs.map((doc) => {
        //やり方１
        const todo = {
          id: doc.id,//ここでid追加
          title: doc.data().title,
          status: doc.data().status,
          priority: doc.data().priority,
          createDate: doc.data().createDate.toDate(),//ここで型変換しちゃう
          updateDate: doc.data().updateDate.toDate(),
          action: "icons",
        };
        newTodos.push({...todo});//配列に入れていく
        //やり方2
        // newTodos.push({...doc.data(), id: doc.id});これだと型変換できない（多分、いや出来るかも）
      });
      // console.log(snapshot.docs.map((doc) => ({ ...doc.data() })));
      // console.log(newTodos);
      setTodos(newTodos);
    });
  };
  //Read(ここまで)////////////////////////////

  console.log(todos.map((todo) => todo)); 
 

  return (
    <>
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
            {/* filterTodos.mapに書き換える */}
            {todos.map((todo) => (
              //filteredTodos2もしたい
              <Tr key={todo.id}>
                <Td fontWeight="bold">{todo.title}</Td>

                {/* status */}
                <Td>
                  <Select
                    // bg={status.map((value) => todo.status === value.text && value.backgroundColor)}
                    // bg={
                    //   status.find((value) => todo.status === value.text)
                    //     .backgroundColor
                    // }
                    // color={
                    //   status.find((value) => todo.status === value.text).color
                    // }
                    borderColor="blackAlpha.800"
                    borderRadius="full"
                    value={todo.status}
                    onChange={(e) => handleStatusChange(todo, e)}
                    fontWeight="bold"
                  >
                    {status.map((value, index) => (
                      <option key={index} value={value.text}>
                        {value.word}
                      </option>
                    ))}
                  </Select>
                </Td>

                {/* priority ok */}
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
                  {/* 0を表示する */}
                  {('0' + (todo.createDate.getHours() + 1) ).slice(-2)}
                </Td>

                <Td textAlign="center" fontWeight="bold">
                  {/* {todo.updateDate} */}
                </Td>

                <Td>
                  <Flex justifyContent="center">
                    <button
                      style={{ display: "inline-block", marginRight: "10px" }}
                      ml="150px"
                      onClick={() => handleOpenEditPage(todo)}
                    >
                      <EditIcon />
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
    </>
  );
};

export default Test;
