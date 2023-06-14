/* 
@決めごと
figmaのレイヤーに沿って命名
文字の色とサイズはまだ触らない

@悩みごと
モーダルをどうするか　useDisclosure()を使わず表示できる？
cssの書く場所はどこにすべきか
さすがにスマホサイズとかは作らないですよね…？
grid,overlayの扱いが分からない
Boxだらけで見づらい。。。

@やったこと
あまりにも長いので一部コンポーネント化しました。
modalはopenmodalを押して消すところだけ実装しました。

@おすすめ機能
auto rename tag
locator js

@タスク
主なレイヤー→ Grid,Header,Title,CommentButton,BackButton,showTable,CommentList,overlay,commentModal

*/
import { useEffect, useState } from "react";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/libs/firebase";
import { Box, Button, HStack, VStack, Spacer } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { ComentCards } from "../components/comentCards";
import { ModalTodoShow } from "../components/modalTodoShow";
import { TodoHeader } from "@/components/header";
import { DateDisplay } from "@/components/DateDisplay";
import { useGettingId } from "@/hooks/useGettingId";

const todoShow = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const { todoId } = useGettingId();

  //後でhooksに切り分ける

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "todos", todoId);
      const docSnap = await getDoc(docRef);
      setTitle(docSnap.data().title);
      setDetail(docSnap.data().detail);
      setCreateDate(docSnap.data().createDate.toDate());
      setUpdateDate(docSnap.data().updateDate.toDate());
    };
    if (todoId) {
      fetchData();
    }
  }, [todoId]);

  return (
    <>
      <Box>
        <TodoHeader />

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
              // position={"absolute"}
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
                // position={"absolute"}
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
                // position={"absolute"}
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
                // position={"absolute"}
                w={"560px"}
                h={"45px"}
                left={"16px"}
                top={"400px"}
              >
                {/* edittodoへのリンク */}
                <Link
                  as={`/edittodo/${todoId}`}
                  href={{ pathname: `/edittodo/[id]` }}
                >
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

      {/* ここまで */}
    </>
  );
};

export default todoShow;
