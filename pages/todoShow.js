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
import { Box, Button, HStack, VStack, Spacer } from "@chakra-ui/react";
import { ComentCards } from "../components/comentCards";
import { ModalTodoShow } from "../components/modalTodoShow";
import { TodoHeader } from "@/components/header";

const todoShow = () => {
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
              <Button
                w={"104px"}
                h={"40px"}
                color={"#F0FFF4"}
                borderRadius={"50px"}
                bg="#25855A"
                mr="10px"
              >
                Comment
              </Button>

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
                <Box>Github上に静的サイトをホスティングする</Box>
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
                <Box>
                  AWS コンソールで AWS Amplify
                  を使って静的ウェブサイトをホスティングします。AWS Amplify
                  は、静的ウェブサイトおよびウェブアプリにフルマネージドのホスティングを提供します。Amplify
                  のホスティングソリューションは、Amazon CloudFront と Amazon S3
                  を使って、AWS コンテンツ配信ネットワーク (CDN)
                  を介してサイトアセットを提供します。
                  継続的デプロイをセットアップします。Amplify
                  は、継続的デプロイで Git
                  ベースのワークフローを提供します。それにより、コードコミットごとに、サイトに自動的に更新をデプロイすることができます。
                </Box>
              </Box>

              {/* FOOTER */}
              <HStack
                // position={"absolute"}
                w={"560px"}
                h={"45px"}
                left={"16px"}
                top={"400px"}
              >
                <ModalTodoShow />
                <Spacer />
                <Box>
                  <Box>Create</Box>
                  <Box> 2020-11-8 18:55</Box>
                </Box>
                <Box>
                  <Box>Update</Box>
                  <Box> 2020-11-8 18:55</Box>
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
