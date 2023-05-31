import { Box, HStack, Heading, Spacer } from "@chakra-ui/react"
import Link from "next/link"

export const TodoHeader = () => {
  return (
    <Box bg='#68D391' w='100%' p={4} display="flex" h="80px" >
      {/* ※showpageが高さ指定あるためh=80入力　それと同時にtodoの大きさが下に余白なし */}
      <Heading 
        as='h1' 
        size='4xl' 
        maxW='1080px' 
        m="0 auto"
        ml="20"
      >
        TODO
      </Heading>
      {/* 最終実装時削除 */}
      <Spacer />
      <HStack mt='2' spacing="4" mr="10px">
        <Link href="/">Home</Link>
        <Link href="/login">LogIn</Link>
        <Link href="/signup">SignUp</Link>
        <Link href="/top">Top</Link> 
        <Link href="/create">Create</Link>
        <Link href="/edittodo">Edit</Link>
        <Link href="/todoShow">Show</Link>
        <Link href="/sdfglsdrg">404</Link>
      </HStack>
      {/* 最終実装時削除 */}
    </Box>
  )
}