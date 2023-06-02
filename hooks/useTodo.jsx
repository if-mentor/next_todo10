import { db } from "@/libs/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  //Read(ここから)///////////////////////////

  const readData = async () => {
    const todoData = collection(db, "todos");
    onSnapshot(todoData, (snapshot) => {
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
  };
  console.log(todos.map((todo) => todo));
  //Read(ここまで)////////////////////////////
  return { todos, readData };
};
