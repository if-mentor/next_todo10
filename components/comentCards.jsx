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
import { useRouter } from "next/router";

export const ComentCards = () => {
  //firebaseからの読み取り
  //posts -> commentlist -> comments -> {id,comment...}
  const [commentList, setCommentlist] = useState([]);
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

  //idによる選別
  const router = useRouter();
  const id  = router.query.id;
  const getTodoById = (id) => {
    return commentList.find((comments) => comments.id === id);
  };

  const comments = getTodoById(id);
  const name = comments ? comments.name : "";
  const comment = comments ? comments.comment : "";
  const date = comments ? comments.date : "";
  // console.log(comments);

  return (
    <VStack display="grid" height="480px" overflow="scroll">
      <Box className={styles.commentFrame} key={id}>
        <HStack className={styles.commentTopFrame}>
          <Box className={styles.commentContent} ml="10">
            {name}
          </Box>
          <Box className={styles.commentContent}>
            <DateDisplay date={date} />
          </Box>
        </HStack>
        <Box>{comment}</Box>
      </Box>
    </VStack>
  );
};
