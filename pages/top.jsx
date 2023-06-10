import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading, Select, Box, Flex, Spacer } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

//新規追加分(Read)
import { useTodo } from "../hooks/useTodo";
import { DateDisplay } from "../components/DateDisplay";
import { TodoHeader } from "@/components/header";
import { DeleteButton } from "@/components/DeleteButton";
import { EditButton } from "@/components/EditButton";
import { SearchInput } from "@/components/topComponent/searchInput";
import { ResetButton } from "@/components/topComponent/resetButton";

function Top() {
  const status = [
    {
      text: "not started",
      backgroundColor: "green.100",
      color: "blackAlpha.800",
      word: "NOT STARTED",
    },

    {
      text: "doing",
      backgroundColor: "green.600",
      color: "white",
      word: "DOING",
    },

    {
      text: "done",
      backgroundColor: "green.300",
      color: "blackAlpha.800",
      word: "DONE",
    },
  ];

  // const [todos, setTodos] = useState([]);
  const { todos, setTodos, readData } = useTodo();
  const [searchTitle, setSearchTitle] = useState(""); 
  const [todoId, setTodoId] = useState(todos.length + 1);
  const [isEditable, setIsEditable] = useState(false);
  const [editId, setEditId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [filter, setFilter] = useState("-------");
  const [filter2, setFilter2] = useState("-------");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filteredTodos2, setFilteredTodos2] = useState([]);
  const [filterWordTodo, setFilterWordTodo] = useState([]);
  
  //削除ボタン関数
  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo !== targetTodo));
  };

  //編集ボタン関数
  const handleOpenEditPage = (todo) => {
    setIsEditable(true);
    setEditId(todo.id);
    setNewTitle(todo.title); //必要？
  };

  const handleStatusChange = (targetTodo, e) => {
    const newArray = todos.map((todo) =>
      todo.id === targetTodo.id ? { ...todo, status: e.target.value } : todo
    );
    setTodos(newArray);
  };
  const handlePriorityChange = (targetTodo, e) => {
    const newArray = todos.map((todo) =>
      todo.id === targetTodo.id ? { ...todo, priority: e.target.value } : todo
    );
    setTodos(newArray);
  };

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
    const filteringTodos2 = () => {
      switch (filter2) {
        case "high":
          setFilteredTodos2(todos.filter((todo) => todo.status === "high"));
          break;
        case "middle":
          setFilteredTodos2(todos.filter((todo) => todo.status === "middle"));
          break;
        case "low":
          setFilteredTodos2(todos.filter((todo) => todo.status === "low"));
          break;
        default:
          setFilteredTodos2(todos);
      }
    };
    filteringTodos2();
  }, [filter2, todos]);

  //Read(ここから)///////////////////////////
  useEffect(() => {
    readData();
  }, []);

  //Read(ここまで)////////////////////////////

  // ワード検索の関数…statusが絞り込まれているものに対してさらにワードで絞り込み//
  const searchWord = () => {
    const searchedTodo = filteredTodos.filter((todo) => {
      // return todo.title === searchTitle
      // 完全一致の場合
      return todo.title.indexOf(searchTitle) > -1 
      // 部分一致　該当するものがない場合-1を返す
    })
    console.log(searchedTodo)
    setFilteredTodos(searchedTodo)
    // statusが絞り込まれているものに対してさらに更新する
  }

  // サーチ欄が空になった時の動き//
  useEffect(() => {
    if(searchTitle === ""){
      setFilteredTodos(filterWordTodo)
      // 今のfilteredTodoにはstatusとワード検索両方の絞り込みが入っている
      // -> statusだけフィルターがかかった状態に戻る
    }
  },[searchTitle])


  return (
    <div>
      <TodoHeader />
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
              <option value="high">High</option>
              <option value="middle">Middle</option>
              <option value="low">Low</option>
            </Select>
          </Box>
          <ResetButton />
          <Spacer />
          <Box mt="10">
            <EditIcon />
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
                  <Td fontWeight="bold">{todo.title}</Td>

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
                      <option value="high">High</option>
                      <option value="middle">Middle</option>
                      <option value="low">Low</option>
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
    </div>
  );
};

export default Top;
