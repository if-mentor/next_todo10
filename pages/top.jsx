import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading, Select, Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { auth, db } from "@/libs/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { status } from "@/config/todo";
import { useTodo } from "../hooks/useTodo";
import { DateDisplay } from "../components/DateDisplay";
import { DeleteButton } from "@/components/button/DeleteButton";
import { EditButton } from "@/components/button/EditButton";
import { ResetButton } from "@/components/button/ResetButton";
import { SearchInput } from "@/components/searchInput";
import { Header } from "@/components/header";

const Top = () => {
  const router = useRouter();
  const { todos } = useTodo();
  const [searchTitle, setSearchTitle] = useState("");
  const [filter, setFilter] = useState("-------");
  const [filter2, setFilter2] = useState("-------");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterWordTodo, setFilterWordTodo] = useState([]);

  //firebase上のstatus読み取り変更
  const handleStatusChange = (targetTodo, e) => {
    e.preventDefault();

    updateDoc(doc(db, "todos", targetTodo.id), {
      status:e.target.value
    });
  }

  //firebase上のpriority読み取り変更
  const handlePriorityChange = (targetTodo, e) => {
    e.preventDefault();

    updateDoc(doc(db, "todos", targetTodo.id), {
      priority:e.target.value
    });
  }

  //STATUS
  useEffect(() => {
    const filteringTodos = () => {
      switch (filter) {
        case "notStarted":
          setFilteredTodos(
            todos.filter((todo) => todo.status === "not started")
          );
          setFilterWordTodo(
            todos.filter((todo) => todo.status === "not started")
          );
          break;
        case "doing":
          setFilteredTodos(todos.filter((todo) => todo.status === "doing"));
          setFilterWordTodo(todos.filter((todo) => todo.status === "doing"));
          break;
        case "done":
          setFilteredTodos(todos.filter((todo) => todo.status === "done"));
          setFilterWordTodo(todos.filter((todo) => todo.status === "done"));
          break;
        default:
          setFilteredTodos(todos);
          setFilterWordTodo(todos);
      }
    };
    filteringTodos();
  }, [filter, todos]);

  //PRIORITY
  useEffect(() => {
    const filteringTodos = () => {
      switch (filter2) {
        case "High":
          setFilteredTodos(todos.filter((todo) => todo.priority === "High"));
          setFilterWordTodo(todos.filter((todo) => todo.priority === "High"));
          break;
        case "Middle":
          setFilteredTodos(todos.filter((todo) => todo.priority === "Middle"));
          setFilterWordTodo(todos.filter((todo) => todo.priority === "Middle"));
          break;
        case "Low":
          setFilteredTodos(todos.filter((todo) => todo.priority === "Low"));
          setFilterWordTodo(todos.filter((todo) => todo.priority === "Low"));
          break;
        default:
          setFilteredTodos(todos);
          setFilterWordTodo(todos);
      }
    };
    filteringTodos();
  }, [filter2, todos]);

  // ワード検索の関数…statusが絞り込まれているものに対してさらにワードで絞り込み//
  const searchWord = () => {
    const searchedTodo = filteredTodos.filter((todo) => {
      return todo.title.indexOf(searchTitle) > -1;
    });
    setFilteredTodos(searchedTodo);
  }

  // サーチ欄が空になった時の動き//
  useEffect(() => {
    if(searchTitle === ""){
      setFilteredTodos(filterWordTodo);
    }
  }, [searchTitle]);

  const [userAuth, setUserAuth] = useState();

  useEffect(() => {
    // ログイン認証
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setUserAuth(user);
      }
    });
  }, []);

  if (userAuth !== null) {
    return (
      <>
        <Header />

        <Box maxW="1080px" m="0 auto">
          <Heading as="h2" size="2xl" mt="2">
            TODO LIST
          </Heading>
          <Box display="flex" mt="32px" mb="32px">
            <Box>
              <p>SEARCH</p>
              <SearchInput
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
                searchWord={searchWord}
              />
            </Box>
            <Box ml="15px">
              <p>STATUS</p>
              <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">-------</option>
                <option value="notStarted">NOT STARTED</option>
                <option value="doing">DOING</option>
                <option value="done">DONE</option>
              </Select>
            </Box>
            <Box ml="15px">
              <p>PRIORITY</p>
              <Select
                value={filter2}
                onChange={(e) => setFilter2(e.target.value)}
              >
                <option value="all">-------</option>
                <option value="High">High</option>
                <option value="Middle">Middle</option>
                <option value="Low">Low</option>
              </Select>
            </Box>

            <ResetButton />
            
            <Spacer />
            <Box mt="10">
              {/* ページ遷移動作追加しました */}
              <Button 
                rightIcon={<EditIcon />} 
                colorScheme='green' 
                variant='outline'
                onClick={() => router.push('/create')}
                borderRadius="full"
              >
                New
              </Button>
            </Box>
          </Box>

          <TableContainer>
            <Table size="sm" variant="simple">
              <Thead size="3xl" bg="#68D391" height="16">
                <Tr>
                  <Th textAlign="center" fontSize="2xl" textTransform="none">
                    Task
                  </Th>
                  <Th textAlign="center" fontSize="2xl" textTransform="none">
                    Status
                  </Th>
                  <Th textAlign="center" fontSize="2xl" textTransform="none">
                    Priority
                  </Th>
                  <Th textAlign="center" fontSize="2xl" textTransform="none">
                    Create
                  </Th>
                  <Th textAlign="center" fontSize="2xl" textTransform="none">
                    Update
                  </Th>
                  <Th textAlign="center" fontSize="2xl" textTransform="none">
                    Action
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredTodos.map((todo) => (
                  //filteredTodos2もしたい
                  <Tr key={todo.id}>
                    <Td fontWeight="bold">
                      <Link
                        as={`/todoShow/${todo.id}`}
                        href={{
                          pathname: "/todoShow",
                          query: { id: todo.id },
                        }}
                        className="link"
                      >
                        {todo.title}
                      </Link>
                    </Td>

                    <Td>
                      <Select
                        //?はオプショナルチェーン演算子
                        bg={
                          status.find((value) => todo.status === value.text)
                            ?.backgroundColor
                        }
                        color={
                          status.find((value) => todo.status === value.text)
                            ?.color
                        }
                        borderColor="blackAlpha.800"
                        borderRadius="full"
                        value={todo.status}
                        onChange={(e) => handleStatusChange(todo, e)}
                        fontWeight="bold"
                      >
                        {status.map((value) => (
                          <option key={value.text} value={value.text}>
                            {value.word}
                          </option>
                        ))}
                      </Select>
                    </Td>

                    <Td>
                      <Select
                        borderColor="tomato"
                        value={todo.priority}
                        onChange={(e) => handlePriorityChange(todo, e)}
                      >
                        <option value="High">High</option>
                        <option value="Middle">Middle</option>
                        <option value="Low">Low</option>
                      </Select>
                    </Td>

                    <Td textAlign="center" fontWeight="bold">
                      <DateDisplay date={todo.createDate} />
                    </Td>

                    <Td textAlign="center" fontWeight="bold">
                      <DateDisplay date={todo.updateDate} />
                    </Td>

                    <Td>
                      <Flex justifyContent="space-around">
                        <EditButton id={todo.id} />
                        <DeleteButton id={todo.id} />
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
  }
}

export default Top;
