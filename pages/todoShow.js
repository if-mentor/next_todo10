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
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Button, HStack, VStack, Spacer } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { ComentCards } from "../components/comentCards";
import { ModalTodoShow } from "../components/modalTodoShow";
import { TodoHeader } from "@/components/header";
import { useTodo } from "@/hooks/useTodo";
import { DateDisplay } from "@/components/DateDisplay";

const todoShow = () => {
  const { todos, readData } = useTodo();
  const router = useRouter();
  const { id } = router.query;

  const getTodoById = (id) => {
    return todos.find((todo) => todo.id === id);
  };

  const todo = getTodoById(id);
  const title = todo ? todo.title : "";
  const detail = todo ? todo.detail : "";
  const createDate = todo ? todo.createDate : "";
  const updateDate = todo ? todo.updateDate : "";
  console.log(todos);

  useEffect(() => {
    readData();
  }, []);

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
              <Button
                w={"104px"}
                h={"40px"}
                borderRadius={"50px"}
                border={"1px"}
                bg="#68D391"
              >
                Back
              </Button>
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
                  as={`/edittodo/${id}`}
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
