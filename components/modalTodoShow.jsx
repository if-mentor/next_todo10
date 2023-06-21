import { useState } from "react";
import { useRouter } from "next/router";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { db } from "@/libs/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const ModalTodoShow = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const submitComment = async (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("名前が入力されていません");
      return;
    }
    if (comment.trim() === "") {
      alert("コメントが入力されていません");
      return;
    }
    const newComment = {
      todoId: router.query.id,
      name: name,
      comment: comment,
      date: serverTimestamp(),
    };
    setCommentList([...commentList, newComment]);
    await addDoc(collection(db, "posts"), newComment);
    setName("");
    setComment("");
    onClose();
  };

  return (
    <>
      <Button
        w={"104px"}
        h={"40px"}
        color={"#F0FFF4"}
        borderRadius={"50px"}
        bg="#25855A"
        mr="10px"
        onClick={onOpen}
      >
        Comment
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"400px"} h={"500px"}>
          <ModalHeader paddingBottom={"0"} fontSize={"4xl"}>
            Comment
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={submitComment}>
            <ModalBody top={"100px"}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  // placeholder="内田裕也"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Your Comment</FormLabel>
                {/* 開始位置が真ん中、改行が出来ない */}
                <Input
                  w={"350px"}
                  h={"245px"}
                  // placeholder="シェケナベイべ"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                w={"350px"}
                color={"#F0FFF4"}
                bgColor={"#25855A"}
              >
                CREATE
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
