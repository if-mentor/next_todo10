import { Box, Heading } from "@chakra-ui/react"
import { LogoutButton } from "./button/LogoutButton";
import { useAuthContext } from "@/contexts/FirebaseAuthContext";

export const Header = () => {
  const { account } = useAuthContext();

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

      {account && <LogoutButton />}
    </Box>
  );
}
