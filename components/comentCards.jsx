/*
styleはtop以外同じなので複製できるようにしたい
mapで処理したい
*/

import { VStack, Box, HStack } from "@chakra-ui/react";
import * as styles from "../styles/comentCards.module.css";

export const ComentCards = () => {
  const comments = [
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
  ]
  return (
    <VStack display="grid" height="480px" overflow="scroll">
      {comments.map((comment) => {
        return (
          <Box className={styles.commentFrame} key={comment.id}>
            <HStack className={styles.commentTopFrame}>
              <Box className={styles.commentContent} ml='10'>
                {comment.name}
              </Box>
              <Box className={styles.commentContent}>
                {comment.date}
              </Box>
            </HStack>
            <Box>{comment.comment}</Box>
          </Box>
        );
      })}
    </VStack>
  );
};
