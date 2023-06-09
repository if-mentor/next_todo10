import { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Text, Input, Heading, VStack } from "@chakra-ui/react";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../libs/firebase";
import { Header } from '@/components/header';

const  Signup = () => {
  //入力したデータをまとめる
  const [formData,setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  //エラー時のバリデーション
  const [error, setError] = useState('');

  const onChangeFormData = (e) => {
    setFormData({
    ...formData,
    [e.target.id]: e.target.value,
    });
  }

  //ページ遷移させるためにuseRouterを定義
  const router = useRouter();

  const onSubmitFormData = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword( auth, email, password );

      // データベースに登録する
      updateProfile(auth.currentUser, {displayName: name,});

      //topにページ遷移する
      router.push("/top");
    } catch (error) {
      //エラーのメッセージの表示
      switch (error.code) {
        case "auth/network-request-failed":
          setError("通信がエラーになったのか、またはタイムアウトになりました。通信環境がいい所で再度やり直してください。");
          break;

        case "auth/weak-password":
          setError("パスワードが短すぎます。6文字以上を入力してください。");
          break;

        case "auth/invalid-email":
          setError("メールアドレスが正しくありません");
          break;

        case "auth/email-already-in-use":
          setError("メールアドレスがすでに使用されています。ログインするか別のメールアドレスで作成してください");
          break;

        default:
          setError("アカウントの作成に失敗しました。通信環境がいい所で再度やり直してください。");
      }
    }
  };
  

  return (
    <>
      <Header />
      
      <Box height={"calc(80vh - 80px)"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box height={"424px"} width={"747px"} mt={"100px"} >
          <Box bg={"green.100"} p={"60px"}  borderRadius={"40px"}>
            <Box p={"6px 32px"} bg={"#F0FFF4"} display={"inline-block"} borderRadius={"40px"}>
              <Text width={"80px"} textAlign={"center"} fontStyle={"Gothic A1"} color={"#25855A"} fontWeight="bold">
                EMAIL
              </Text>
            </Box>

            <Box mt={"24px"} padding={"0px 50px"} >
              <Text fontWeight="bold" fontStyle={'Gothic A1'}>メールアドレス</Text>
              <Input
                type="email"
                placeholder="Email"
                id="email"
                value={email}
                required
                onChange={(e)=>onChangeFormData(e)}
                bg={"green.50"} borderRadius={"40px"} />
            </Box>

            <Box mt={"24px"} padding={"0px 50px"}>
              <Text fontWeight="bold" fontStyle={'Gothic A1'}>パスワード</Text>
              <Input
                type="password"
                placeholder="Password"
                id="password"
                value={password}
                required
                onChange={(e)=>onChangeFormData(e)}
                bg={"green.50"} borderRadius={"40px"}/>
            </Box>

            <VStack textAlign={"center"}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button onClick={(e)=>onSubmitFormData(e)} display={"inline-block"} mt={"24px"} color={"white"} bg={"green.600"} borderRadius={"50px"} height={"60px"} width={"200px"}>
                SIGN UP
              </Button>
              <Link href="/login">登録済みのかたはこちらから</Link>
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Signup;
