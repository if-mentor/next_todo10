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

export const ModalTodoShow = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>open modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          position={"absolute"}
          w={"400px"}
          h={"424px"}
          left={"427px"}
          top={"80px"}
        >
          <ModalHeader paddingBottom={"0"} fontSize={"4xl"}>Comment</ModalHeader>
          <ModalCloseButton />

          <ModalBody top={"100px"}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="内田裕也" />
            </FormControl>
            <FormControl>
              <FormLabel>Your Comment</FormLabel>
              <Input
                placeholder="シェケナベイべ"
                verticalAlign={"top"}
                position={"absolute"}
                w={"350px"}
                h={"175px"}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button w={"350px"} color={"#F0FFF4"} bgColor={"#25855A"}>
              CREATE
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
