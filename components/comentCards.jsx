import { useEffect, useState } from "react";
import { VStack, Box, HStack, Text, Center } from "@chakra-ui/react";
import * as styles from "../styles/comentCards.module.css";
import { db } from "@/libs/firebase";
import { getDocs, query, collection, where } from "firebase/firestore";
import { DateDisplay } from "./DateDisplay";
import { useGettingId } from "@/hooks/useGettingId";

export const ComentCards = () => {
  const [commentList, setCommentlist] = useState([]);
  const { todoId } = useGettingId();

  //getDocだと単一データしか取れなかった
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        query(collection(db, "posts"), where("todoId", "==", todoId))
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

    if (todoId) {
      fetchData();
    }
  }, [todoId,commentList]);

  // console.log(commentList);

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
