import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Heading,
  Textarea,
  Text,
  Container,
} from "@chakra-ui/react";
// import Head from 'next/head'
import {
  doc,
  getDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/libs/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const EditTodo = () => {

  //?
    const router = useRouter();
    const todoId  = router.query.id;
  // const todoId  = "0P6N4an8xyK5LtLxJ1BH"


  //選択したtodoのidをURLから取得する


  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [createDateMessage, setCreateDateMessage] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updateDateMessage, setUpdateDateMessage] = useState("");
  const [editTodo, setEditTodo] = useState({});

  //入力したtitle保持（画面上）
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  //入力したdetail保持（画面上）
  const handleChangeDetail = (e) => {
    setDetail(e.target.value);
  };


  //初期状態のtodoのtitleとdetailを
  //firebaseから取得して表示している（非同期処理）

  //？onSnapShotに書き換える？
  //➡書き換えしたら、setUpdateのところでエラーが出た
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "todos", todoId);
      const docSnap = await getDoc(docRef);
      setTitle(docSnap.data().title);
      setDetail(docSnap.data().detail);
      setCreateDate(docSnap.data().createDate.toDate());
      setUpdateDate(docSnap.data().updateDate.toDate());
    };
    if(todoId){
      fetchData();
    }
  }, [todoId]);

  //firebaseからとってきた日付データ(tipmestanp型)を
  //2023-5-4:16 みたいな形式に直している
  useEffect(() => {
    if (createDate) {
    const Year = createDate.getFullYear();
    const Month = createDate.getMonth() + 1;
    const Day = createDate.getDate();
    const Hours = createDate.getHours();
    const Minutes = createDate.getMinutes();

    const dates = Year +
    "-" +
    Month +
    "-" +
    Day +
    " " +
    Hours +
    ":" +
    Minutes

    setCreateDateMessage(dates);
    }
  }, [createDate]);

  useEffect(() => {
    if (updateDate) {
    const Year = updateDate.getFullYear();
    const Month = updateDate.getMonth() + 1;
    const Day = updateDate.getDate();
    const Hours = updateDate.getHours();
    const Minutes = updateDate.getMinutes();

    const dates = Year +
    "-" +
    Month +
    "-" +
    Day +
    " " +
    Hours +
    ":" +
    Minutes

    setUpdateDateMessage(dates);
    }
  }, [updateDate]);

  //入力した（編集した）titleとdetailを
  //firebaseに送り返すためにeditTodoに上書きする
  useEffect(() => {
    const changeEditTodo = () => {
      setEditTodo({
        ...editTodo,
        title: title,
        detail: detail,
      });
    };
    changeEditTodo();
  }, [title, detail]);

  //updateボタンを押したときの動作
  const handleEditTodo = async (e) => {
    e.preventDefault();
    if (editTodo.title.trim() === "") {
      return alert("titeが空です");
    } else if (editTodo.detail.trim() === "") {
      return alert("detailが空です");
    }
    try {
      await updateDoc(doc(db, "todos", todoId), {
        title: editTodo.title,
        detail: editTodo.detail,
        updateDate:serverTimestamp(),
      });
      console.log("success");
    } catch (error) {
      console.log("error");
    }
    // topページに戻る
    router.push('/top')
  };

  return (
    <>
      <Box
        w="100%"
        h="80px"
        bg="green.300"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          w="85%"
          maxW="1080px"
          color="blackAlpha.800"
          fontSize="48px"
          fontWeight="bold"
        >
          TODO
        </Heading>
      </Box>

      <Container w="85%" maxW="1080px" pt="16px">
        <Box>
          <Flex w={"100%"}>
            <Heading as="h2" fontSize="28px" fontWeight="bold">
              EDIT TODO
            </Heading>
            <Spacer />
            <Link href="/top">
            <Button
              w={28}
              bg="green.300"
              rounded="full"
              borderWidth="1px"
              borderColor="blackAlpha.800"
            >
              Back
            </Button>
            </Link>
          </Flex>
          <Box w="100%">
            <form onSubmit={handleEditTodo}>
              <FormControl mb="20px">
                <FormLabel fontSize="24px" fontWeight="bold" lineHeight={1}>
                  TITLE
                </FormLabel>
                <Input
                  value={title}
                  onChange={handleChangeTitle}
                  h="70px"
                  fontSize="20px"
                  rounded="10px"
                  type="text"
                  borderColor="blackAlpha.800"
                />
              </FormControl>
              <FormControl mb="20px">
                <FormLabel fontSize="24px" fontWeight="bold" lineHeight={1}>
                  DETAIL
                </FormLabel>
                <Textarea
                  h="320px"
                  rounded="10px"
                  borderColor="blackAlpha.800"
                  fontSize="20px"
                  value={detail}
                  onChange={handleChangeDetail}
                ></Textarea>
              </FormControl>

              <Flex mt={1}>
                <Flex direction="column" mr={27}>
                  <Text>Create</Text>
                  <Text fontSize="20px">{createDateMessage}</Text>
                </Flex>
                <Flex direction="column">
                  <Text>Update</Text>
                  <Text fontSize="20px">{updateDateMessage}</Text>
                </Flex>
                <Spacer />
                <Button
                  w={28}
                  bg="green.600"
                  rounded="full"
                  color="green.50"
                  borderWidth="1px"
                  borderColor="blackAlpha.800"
                  type="submit"
                >
                  UPDATE
                </Button>
              </Flex>
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default EditTodo;
