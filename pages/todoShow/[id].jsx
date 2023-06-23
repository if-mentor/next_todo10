import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { db } from "@/libs/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Box, Button, HStack, VStack, Spacer } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { ComentCards } from "../../components/comentCards";
import { ModalTodoShow } from "../../components/modalTodoShow";
import { DateDisplay } from "@/utils/DateDisplay";
import { Header } from "@/components/header";

const TodoShow = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "todos", router.query.id);
      const docSnap = await getDoc(docRef);
      setTitle(docSnap.data().title);
      setDetail(docSnap.data().detail);
      setCreateDate(docSnap.data().createDate.toDate());
      setUpdateDate(docSnap.data().updateDate.toDate());
    };

    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);

  return (
    <>
      <Box>
        <Header />

        <Box maxW="1080px" margin="0 auto">
          <Box
            display="flex"
            mt="32px"
            mb="32px"
            justifyContent="space-between"
          >
            <Box fontSize={"28px"} lineHeight={"32.81px"}>
              SHOW TODO
            </Box>
            <Box>
              {/* Comment Button */}
              <ModalTodoShow />

              {/* Back Button */}
              <Link href="/top">
                <Button
                  w={"104px"}
                  h={"40px"}
                  borderRadius={"50px"}
                  border={"1px"}
                  bg="#68D391"
                >
                  Back
                </Button>
              </Link>
            </Box>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <VStack
              w={"592px"}
              h={"480px"}
              left={"100px"}
              top={"144px"}
              borderRadius={"10px"}
              border={"1px"}
              borderColor={"blackAlpha.800"}
            >
              {/* TITLE */}
              <Box
                w={"560px"}
                h={"61px"}
                left={"16px"}
                top={"16px"}
              >
                <Box bgColor={"green.300"}>
                  <Box>TITLE</Box>
                </Box>
                <Box>{title}</Box>
              </Box>

              {/* DETAIL */}
              <Box
                w={"560px"}
                h={"291px"}
                left={"16px"}
                top={"93px"}
              >
                <Box bgColor={"green.300"}>
                  <Box>DETAIL</Box>
                </Box>
                <Box>{detail}</Box>
              </Box>

              {/* FOOTER */}
              <HStack
                w={"560px"}
                h={"45px"}
                left={"16px"}
                top={"400px"}
              >
                {/* edittodoへのリンク */}
                <Link as={`/edittodo/${router.query.id}`} href={{ pathname: `/edittodo/[id]` }}>
                  <Button>
                    Edit
                    <EditIcon />
                  </Button>
                </Link>

                <Spacer />
                <Box>
                  <Box>Create</Box>
                  <DateDisplay date={createDate} />
                </Box>
                <Box>
                  <Box>Update</Box>
                  <DateDisplay date={updateDate} />
                </Box>
              </HStack>
            </VStack>

            {/* Comment */}
            <ComentCards />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TodoShow;
