import { useEffect, useState } from "react";
import { VStack, Box, HStack, Text } from "@chakra-ui/react";
import * as styles from "../styles/comentCards.module.css";
import { db } from "@/libs/firebase";
import {
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  where,
} from "firebase/firestore";
import { DateDisplay } from "./DateDisplay";
import { useGettingId } from "@/hooks/useGettingId";

export const ComentCards = () => {
  //firebaseからの読み取り
  //posts -> commentlist -> {id,comment...}
  const [commentList, setCommentlist] = useState([]);
  // const readCommentData = async () => {
  //   const commentData = collection(db, "posts");
  //   onSnapshot(commentData, (snapshot) => {
  //     const newCommentsList = [];
  //     snapshot.docs.map((doc) => {
  //       newCommentsList.push({
  //         todoId: doc.data().todoId,
  //         name: doc.data().name,
  //         comment: doc.data().comment,
  //         date: doc.data().date.toDate(),
  //       });
  //     });
  //     setCommentlist(newCommentsList);
  //   });
  //   console.log(commentData);
  // };

  // useEffect(() => {
  //   readCommentData();
  // }, []);

  //idによる選別
  const { todoId } = useGettingId();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const docRef = doc(db, "posts", todoId);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       const commentData = docSnap.data();
  //       setCommentlist([commentData]);
  //     } else {
  //       setCommentlist([]);
  //     }
  //   };
  //   if (todoId) {
  //     fetchData();
  //   }
  //   console.log(commentList);
  // }, [todoId]);

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
        // date: doc.data().date.toDate(),
      }));
      setCommentlist(newCommentsList);
    };

    if (todoId) {
      fetchData();
    }
  }, [todoId]);

  console.log(commentList);

  return (
    <>
      {commentList.length === 0 ? (
        <Text>コメントはまだありません</Text>
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
