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

@おすすめ機能
auto rename tag
locator js

@タスク
主なレイヤー→ Grid,Header,Title,CommentButton,BackButton,showTable,CommentList,overlay,commentModal
配置未完了→ Grid,Header,Title,CommentButton,BackButton,showTable,CommentList,overlay,commentModal
大きさ未完了→ Grid,Header,Title,CommentButton,BackButton,showTable,CommentList,overlay,commentModal
色未完了→ Grid,Header,Title,CommentButton,BackButton,showTable,CommentList,overlay,commentModal
文字未完了→ Grid,Header,Title,CommentButton,BackButton,showTable,CommentList,overlay,commentModal
*/

import Head from "next/head";
import {
  Box,
  Button,
  chakra,
  HStack,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Todo 10</title>
        <meta name="description" content="Team Development 10th" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* 以下が作成範囲 */}

      {/* header */}
      <chakra.header position={"absolute"} w={"1280px"} h={"80px"} bg="#68D391">
        <Box
          position={"absolute"}
          width={"127px"}
          height={"56px"}
          left={"99px"}
          top={"12px"}
        >
          Todo
        </Box>
      </chakra.header>

      {/* title */}
      <Box
        position={"absolute"}
        w={"161px"}
        h={"33px"}
        top={"96px"}
        left={"100px"}
      >
        SHOW TODO
      </Box>

      {/* Comment Button */}
      <Box
        position={"absolute"}
        w={"104px"}
        h={"40px"}
        left={"956px"}
        top={"104px"}
        borderRadius={"50px"}
        bg="#25855A"
      >
        <button>Comment</button>
      </Box>

      {/* Back Button */}
      <Box
        position={"absolute"}
        w={"104px"}
        h={"40px"}
        left={"1076px"}
        top={"104px"}
        borderRadius={"50px"}
        border={"1px"}
        bg="#68D391"
      >
        <button>Back</button>
      </Box>

      {/* Show Table */}
      <VStack
        position={"absolute"}
        w={"592px"}
        h={"480px"}
        left={"100px"}
        top={"144px"}
        borderRadius={"10px"}
        border={"1px"}
        borderColor={"blackAlpha.800"}
      >
        <Box position={"absolute"} w={"560px"} h={"61px"} left={"16px"} top={"16px"}>
          <Box bgColor={"green.300"}>
            <Box>TITLE</Box>
          </Box>
          <Box>Github上に静的サイトをホスティングする</Box>
        </Box>
        <Box position={"absolute"} w={"560px"} h={"291px"} left={"16px"} top={"93px"}>
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
            継続的デプロイをセットアップします。Amplify は、継続的デプロイで Git
            ベースのワークフローを提供します。それにより、コードコミットごとに、サイトに自動的に更新をデプロイすることができます。
          </Box>
        </Box>
        <HStack position={"absolute"} w={"560px"} h={"45px"} left={"16px"} top={"400px"} bgColor={"blue.100"}>
          {/* あとで色消す */}
          <Box ml={"auto"}>
            <Box>Create</Box>
            <Box> 2020-11-8 18:55</Box>
          </Box>
          <Box ml={"auto"}>
            <Box>Update</Box>
            <Box> 2020-11-8 18:55</Box>
          </Box>
        </HStack>
      </VStack>

      {/* Comment */}
      <VStack
        position={"absolute"}
        w={"472px"}
        h={"464px"}
        left={"708px"}
        top={"160px"}
      >
        {/* コードが長くなるので一つだけ*/}
        <Box
          position={"absolute"}
          w={"472px"}
          h={"104px"}
          top={"px"}
          border={"1px"}
          borderRadius={"10px"}
          overflow={"hidden"}
        >
          <HStack
            w={"472px"}
            h={"28px"}
            border={"1px"}
            borderColor={"blackAlpha.800"}
            bgColor={"green.600"}
          >
            <Box
              position={"absolute"}
              w={"95px"}
              h={"19px"}
              left={"24px"}
              top={"5px"}
            >
              ジョン
            </Box>
            <Box
              position={"absolute"}
              w={"87px"}
              h={"19px"}
              left={"361px"}
              top={"4px"}
            >
              2022/01/01
            </Box>
          </HStack>
          <Box>2日後までに完了お願い致します。</Box>
        </Box>
        {/* <Box>リンゴ</Box>
        <Box>ポール</Box>
        <Box>ジョージ</Box> */}
      </VStack>

      {/* modal */}
      <Modal>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="内田裕也" />
            </FormControl>

            <FormControl>
              <FormLabel>Your Comment</FormLabel>
              <Input placeholder="シェケナベイべ" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button>CREATE</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ここまで */}
    </>
  );
};

export default Home;
