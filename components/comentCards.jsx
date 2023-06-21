import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { VStack, Box, HStack, Center } from "@chakra-ui/react";
import { db } from "@/libs/firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

import * as styles from "../styles/comentCards.module.css";
import { DateDisplay } from "./DateDisplay";

export const ComentCards = () => {
  const router = useRouter();
  const [commentList, setCommentlist] = useState([]);

  //getDocだと単一データしか取れなかった
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "posts"), where("todoId", "==", router.query.id))
      );
      const newCommentsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todoId: doc.data().todoId,
        name: doc.data().name,
        comment: doc.data().comment,
        date: doc.data().date ? doc.data().date.toDate() : '',
      }));
      setCommentlist(newCommentsList);
    };

    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id, commentList]);

  return (
    <>
      {commentList.length === 0 ? (
        <Center w = '472px'>コメントはまだありません</Center>
      ) : (
        <VStack display="grid" height="480px" overflow="scroll">
          {commentList.map((comments) => (
            <Box className={styles.commentFrame} key={comments.id}>
              <HStack className={styles.commentTopFrame}>
                <Box className={styles.commentContent} ml="10">
                  {comments.name}
                </Box>
                <Box className={styles.commentContent}>
                  <DateDisplay date={comments.date} />
                </Box>
              </HStack>
              <Box>{comments.comment}</Box>
            </Box>
          ))}
        </VStack>
      )}
    </>
  );
};
