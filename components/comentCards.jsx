/*
styleはtop以外同じなので複製できるようにしたい
mapで処理したい
*/

import { VStack, Box, HStack } from "@chakra-ui/react";
import * as styles from "../styles/comentCards.module.css";

export const ComentCards = () => {
  return (
    <VStack
      // w={"472px"}
      // h={"464px"}
      display="grid"
      height="480px"
      overflow="scroll"
    >
      {/* 1*/}
      <Box className={styles.commentFrame}>
        <HStack className={styles.commentTopFrame}>
          <Box className={styles.commentContent} left={"24px"}>
            ジョン
          </Box>
          <Box className={styles.commentContent} left={"361px"}>
            2022/01/01
          </Box>
        </HStack>
        <Box>2日後までに完了お願い致します。</Box>
      </Box>

      {/* 2*/}
      <Box className={styles.commentFrame} top={"120px"}>
        <HStack className={styles.commentTopFrame}>
          <Box className={styles.commentContent} left={"24px"}>
            ジョン
          </Box>
          <Box className={styles.commentContent} left={"361px"}>
            2022/01/01
          </Box>
        </HStack>
        <Box>内容確認致しました。修正点メールしましたのでご確認ください。</Box>
      </Box>

      {/* 3*/}
      <Box className={styles.commentFrame} top={"240px"}>
        <HStack className={styles.commentTopFrame}>
          <Box className={styles.commentContent} left={"24px"}>
            ジョン
          </Box>
          <Box className={styles.commentContent} left={"361px"}>
            2022/01/01
          </Box>
        </HStack>
        <Box>2日後までに完了お願い致します。</Box>
      </Box>
      
      {/* 4*/}
      <Box className={styles.commentFrame} top={"360px"}>
        <HStack className={styles.commentTopFrame}>
          <Box className={styles.commentContent} left={"24px"}>
            ジョン
          </Box>
          <Box className={styles.commentContent} left={"361px"}>
            2022/01/01
          </Box>
        </HStack>
        <Box>2日後までに完了お願い致します。</Box>
      </Box>

      <Box className={styles.commentFrame} top={"360px"}>
        <HStack className={styles.commentTopFrame}>
          <Box className={styles.commentContent} left={"24px"}>
            ジョン
          </Box>
          <Box className={styles.commentContent} left={"361px"}>
            2022/01/01
          </Box>
        </HStack>
        <Box>2日後までに完了お願い致します。</Box>
      </Box>

      
    </VStack>
  );
};
