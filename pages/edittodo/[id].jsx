import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Flex, FormControl, FormLabel, Input, Spacer, Heading, Textarea, Text, Container } from "@chakra-ui/react";
import { db } from "@/libs/firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { DateDisplay } from "../../utils/DateDisplay";
import { Header } from "@/components/header";

const EditTodo = () => {
  const router = useRouter();
  const todoId = router.query.id;

  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [editTodo, setEditTodo] = useState({});

  //入力したtitle保持（画面上）
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }

  //入力したdetail保持（画面上）
  const handleChangeDetail = (e) => {
    setDetail(e.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "todos", todoId);
    
      const docSnap = await getDoc(docRef);
      setTitle(docSnap.data().title);
      setDetail(docSnap.data().detail);
      setCreateDate(docSnap.data().createDate.toDate());
      setUpdateDate(docSnap.data().updateDate.toDate());
    }

    if (todoId) {
      fetchData();
    }
  }, [todoId]);

  useEffect(() => {
    const changeEditTodo = () => {
      setEditTodo({
        ...editTodo,
        title: title,
        detail: detail,
      });
    }

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
        updateDate: serverTimestamp(),
      });
      console.log("success");
    } catch (error) {
      console.log("error");
    }
    // topページに戻る
    router.push("/top");
  }

  return (
    <>
      <Header />

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
                  <Text fontSize="20px">
                    {/* ↓コンポーネント */}
                    <DateDisplay date={createDate} />
                  </Text>
                </Flex>
                <Flex direction="column">
                  <Text>Update</Text>
                  <Text fontSize="20px">
                    {/* ↓コンポーネント */}
                    <DateDisplay date={updateDate} />
                  </Text>
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
}

export default EditTodo;
