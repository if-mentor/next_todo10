import { Box, Heading } from "@chakra-ui/react"
import { Logout } from "./button/Logout";

export const Header = () => {
  return (
    <Box bg='#68D391' w='100%' p={4} display="flex" >
      <Heading 
        as='h1' 
        size='4xl' 
        maxW='1080px' 
        m="0 auto"
        ml="20"
      >
        TODO
      </Heading>

      <Logout />
    </Box>
  );
}
