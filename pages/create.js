import Head from "next/head";
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/libs/firebase";
import { RadioButton } from "@/create.component/radioButton";

import {
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Box,
  Text,
} from "@chakra-ui/react";
import { TodoHeader } from "@/components/header";
import Link from "next/link";

const TodoCreate = () => {
  const [todoTitle, setTodoTitle] = useState('') 
  const [todoText, setTodoText] = useState('')
  const [todoPriority, setTodoPriority] = useState('Low')
  const [todos, setTodos] = useState([])
  // const [todoId, setTodoId] = useState(todos.length + 1)

  const handleSubmit = e => {
    e.preventDefault()
    if (todoTitle.trim() ==="") {
      alert("Titleが入力されていません");
      return false;
    }
    if (todoText.trim() ==="") {
      alert("Detailが入力されていません");
      return false;
    }
    setTodos({
      title: todoTitle, 
      detail: todoText, 
      priority: todoPriority, 
      // id:todoId
    })
    addDoc(collection(db, "todos"), {
      // id: todoId,
      title:todoTitle,
      detail: todoText,
      status: "not Started",
      //s小文字の方がよい？
      priority: todoPriority,
      createDate: serverTimestamp(),
      updateDate: serverTimestamp() ,
    });
    setTodoTitle("");
    setTodoText("");
    setTodoPriority("Low");
    // setTodoId(todoId + 1);
  }


  return (
    <>
      <Head>
        <title>Todo Create</title>
        <meta name="description" content="Team Development 10th" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <Heading
        bg="green.300"
        h="80px"
        pl="100px"
        display="flex"
        alignItems="center"
      >
        TODO
      </Heading> */}
      <TodoHeader />

      <Box mr="100px" ml="100px" w="1080px" h="104px">
        <Box pb="15px" h="63" display="flex" justifyContent="space-between">
          <Text w="141px" h="33px" mt="23px" fontSize="24px">
            NEW TODO
          </Text>
          <Button
            box-sizing="border-box"
            bg="green.300"
            border="blackAlpha.800"
            borderRadius="50px"
            w="112px"
            h="40px"
            mt="23px"
          >
            <Link href="/top">
              Back
            </Link>
          </Button>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box w="100%" margin="0 auto">
            <FormControl w="1080px" h="104px" mb="15px">
              <FormLabel htmlFor="title">TITLE</FormLabel>
              <Input
                id="title"
                h="50%"
                type="text"
                placeholder="Text"
                value={todoTitle}
                onChange={e => setTodoTitle(e.target.value)}
              />
            </FormControl>
            <FormControl marginBottom="16px">
              <FormLabel htmlFor="description">DETAIL</FormLabel>
              <Textarea 
                id="detail" 
                placeholder="Text" 
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>PRIORITY</FormLabel>
              <RadioButton todoPriority={todoPriority} setTodoPriority={setTodoPriority}/>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              box-sizing="border-box"
              bg="green.600"
              color="green.50"
              border="blackAlpha.800"
              borderRadius="50px"
              w="112px"
              h="40px"
              ml="0"
            >
              CREATE
            </Button>
            {/* 一緒にページ移動したい formをリンクで囲う×*/}
          </Box>
        </form>
      </Box>
    </>
  );
};

export default TodoCreate;
