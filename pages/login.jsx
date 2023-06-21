import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Button, Text, Input, Heading, VStack, } from "@chakra-ui/react";
import { auth } from "../libs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Header } from "@/components/header";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const onChangeFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //エラー時のバリデーション
  const [error, setError] = useState('');

  const onSubmitFormData = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword( auth, email, password );

      if (userCredential.user) {
        router.push("/top")
      }
    } catch (error) {
      //エラーのメッセージの表示
      switch (error.code) {
        case 'auth/invalid-email':
          setError('正しいメールアドレスの形式で入力してください。');
          break;
        case 'auth/user-not-found':
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
        case 'auth/wrong-password':
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
        default:
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
      }
    }
  }
  
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
                bg={"green.50"} borderRadius={"40px"}
              />
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
                bg={"green.50"} borderRadius={"40px"}
              />
            </Box>

            <VStack textAlign={"center"}>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <Button onClick={(e)=>onSubmitFormData(e)} display={"inline-block"} mt={"24px"} color={"white"} bg={"green.600"} borderRadius={"50px"} height={"60px"} width={"200px"}>
                LOGIN
              </Button>
              <Link href="/signup">登録していないかたはこちらから</Link>
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
