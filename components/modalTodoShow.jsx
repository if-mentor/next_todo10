import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export const ModalTodoShow = () => {
  ///
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentCard, setCommentCard] = useState([
    {
      id: "111111111",
      name: "aaa",
      date: "2022/01/02",
      comment: "おはよう",
    },
    {
      id: "666666",
      name: "bbb",
      date: "2022 / 01 / 01",
      comment: "おはヨーグルト",
    },
    {
      id: "77777",
      name: "ccc",
      date: "2022 / 01 / 01",
      comment: "おはこんばんにちは",
    },
  ]);

  const submitComment = () => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("名前が入力されていません");
      return false;
    }
    if (comment.trim() === "") {
      alert("コメントが入力されていません");
      return false;
    }
    setCommentCard(...commentCard, {
      id: id,
      name: name,
      comment: comment,
    });
    setName("");
    setComment("");
  };
  console.log(commentCard);
////

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
};
