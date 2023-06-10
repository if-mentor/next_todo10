/*
styleはtop以外同じなので複製できるようにしたい
mapで処理したい
idに対応してコメントが出るようにしたい
*/

import { useEffect, useState } from "react";
import { VStack, Box, HStack } from "@chakra-ui/react";
import * as styles from "../styles/comentCards.module.css";

import { db } from "@/libs/firebase";
import { collection, onSnapshot } from "firebase/firestore";

import { DateDisplay } from "./DateDisplay";


export const ComentCards = () => {
  //posts -> commentlist -> comments -> {id,comment...}
  const [commentList, setCommentlist] = useState([])

  //firebaseからの読み取り
  const readCommentData = async () => {
    const commentData = collection(db, "posts");
    onSnapshot(commentData, (snapshot) => {
      const newCommentsList = [];
      snapshot.docs.map((doc) => {
        const comments = {
          id: doc.data().todoId,
          name: doc.data().name,
          comment: doc.data().comment,
          date: doc.data().date.toDate(),
        };
        newCommentsList.push({ ...comments });
      });
      setCommentlist(newCommentsList);
    });
  };

  useEffect(() => {
    readCommentData();
  }, []);
  
  return (
    <VStack display="grid" height="480px" overflow="scroll">

      {commentList.map((comment) => {
        return (
          <Box className={styles.commentFrame} key={comment.id}>
            <HStack className={styles.commentTopFrame}>
              <Box className={styles.commentContent} ml="10">
                {comment.name}
              </Box>
              <Box className={styles.commentContent}>
                <DateDisplay date={comment.date} />
              </Box>
            </HStack>
            <Box>{comment.comment}</Box>
          </Box>
        );
      })}
    </VStack>
  );
};
