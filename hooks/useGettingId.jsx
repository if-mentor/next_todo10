import { useRouter } from "next/router";

export const useGettingId = () => {

  //idの取得
  const router = useRouter();
  const todoId  = router.query.id;

  //取得したidに紐づいたtodoを呼び出す
  //全件取得はレンダリングが多すぎた
  // const getTodoById = (id) => {
  //   return todos.find((todo) => todo.id === id);
  // };
  // const todo = getTodoById(id);

  return { todoId };
};
