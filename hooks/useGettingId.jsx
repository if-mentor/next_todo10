import { useRouter } from "next/router";
import { useTodo } from "./useTodo";

export const useGettingId = () => {
  const { todos } = useTodo();

  //idの取得
  const router = useRouter();
  const { id } = router.query;

  //取得したidに紐づいたtodoを呼び出す
  const getTodoById = (id) => {
    return todos.find((todo) => todo.id === id);
  };
  const todo = getTodoById(id);

  return { id, todo };
};
