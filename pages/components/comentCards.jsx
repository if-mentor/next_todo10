import { VStack, Box, HStack } from "@chakra-ui/react";
import * as styles from "../../styles/comentCards.module.css";

export const ComentCards = () => {
  return (
    <VStack
      position={"absolute"}
      w={"472px"}
      h={"464px"}
      left={"708px"}
      top={"160px"}
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
    </VStack>
  );
};
