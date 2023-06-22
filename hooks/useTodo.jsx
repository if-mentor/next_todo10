import { useEffect, useState } from "react";
import { db } from "@/libs/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
      const newTodos = [];

      snapshot.docs.map((doc) => {
        const todo = {
          id: doc.id,
          title: doc.data().title,
          detail: doc.data().detail,
          status: doc.data().status,
          priority: doc.data().priority,
          createDate: doc.data().createDate.toDate(),
          updateDate: doc.data().updateDate.toDate(),
          action: "icons",
        };
        
        newTodos.push({ ...todo });
      });
      setTodos(newTodos);
    });
  }, []);

  return { todos }
}
