import { VStack } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Next Todo 10</title>
        <meta name="description" content="Team Development 10th" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <VStack mt='200px'>
        <Link href="/">Home</Link>
        <Link href="/login">logIn</Link>
        <Link href="/signup">signUp</Link>
        <Link href="/top">top</Link> 
        <Link href="/create">create</Link>
        <Link href="/edittodo">editTodo</Link>
        <Link href="/todoShow">todoShow</Link>
        <Link href="/sdfglsdrg">404</Link>
      </VStack>
    </>
  );
};

export default Home;
