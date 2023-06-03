import {
    Box,
    Button,
  } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { auth } from "/libs/firebase";

export const LogoutButton = () => {
    const router = useRouter();

    const onLogout = () => {
        auth.signOut();
      router.push("/login")
    };
    

    return (
        <>
            <Box>
                <Button onClick={(e)=>onLogout(e)}
                mt={"24px"} color={"white"} bg={"green.600"} borderRadius={"50px"} height={"40px"} width={"100px"}>
                    LOGOUT
                </Button>
            </Box>
        </>
    )
}
