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
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/libs/firebase";
import { useEffect, useState } from "react";

const EditTodo = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const document = "1";
  //↑ドキュメントをfirebaseから取得して入れ込む
  //選択したtodoのidか何かとヒモづける必要がある

  //↓複数のtodosを取ってきて、
  // ↓その中からidで判断する必要がある？
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const docRef = doc(db, "todos", document);
  //     const docSnap = await getDoc(docRef);
  //     setTitle(docSnap.data().title);
  //     setDetail(docSnap.data().detail);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "todos"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    };
    fetchData();
  }, []);

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
            <Button
              w={28}
              bg="green.300"
              rounded="full"
              borderWidth="1px"
              borderColor="blackAlpha.800"
            >
              Back
            </Button>
          </Flex>
          <Box w="100%">
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
                // placeholder='Github上に静的サイトをホスティングする'
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
                <Text fontSize="20px">2020-11-8 18:55</Text>
              </Flex>
              <Flex direction="column">
                <Text>Update</Text>
                <Text fontSize="20px">2020-11-8 18:55</Text>
              </Flex>
              <Spacer />
              <Button
                w={28}
                bg="green.600"
                rounded="full"
                color="green.50"
                borderWidth="1px"
                borderColor="blackAlpha.800"
              >
                UPDATE
              </Button>
            </Flex>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default EditTodo;
