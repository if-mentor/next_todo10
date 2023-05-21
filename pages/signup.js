import React from 'react'
import {
  Box,
  Button,
  Text,
  Input,
  Heading,
} from "@chakra-ui/react";

const signup = () => {
  return (
    <>
      <Heading w={"1280px"} h={"80px"} bg="#68D391">
        <Box width={"127px"} height={"56px"}left={"99px"}top={"12px"} bg="68D391">
          <Text paddingLeft={"20px"} fontWeight="bold" fontSize={'4xl'} fontStyle={'Roboto'} w={"127px"} h={"56px"} left={"99px"} top={"12px"}>
            TODO
          </Text>
        </Box>
      </Heading>

      <Box height={"clac(100vh - 80px)"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box height={"424px"} width={"747px"} mt={"100px"} >
          <Box bg={"green.100"} p={"60px"}  borderRadius={"40px"}>
            <Box p={"6px 32px"} bg={"#F0FFF4"} display={"inline-block"} borderRadius={"40px"}>
              <Text width={"80px"} textAlign={"center"} fontStyle={"Gothic A1"} color={"#25855A"} fontWeight="bold">
                EMAIL
              </Text>
            </Box>

            <Box mt={"24px"} padding={"0px 50px"} >
              <Text fontWeight="bold" fontStyle={'Gothic A1'}>メールアドレス</Text>
              <Input bg={"green.50"} borderRadius={"40px"} />
            </Box>

            <Box mt={"24px"} padding={"0px 50px"}>
              <Text fontWeight="bold" fontStyle={'Gothic A1'}>パスワード</Text>
              <Input bg={"green.50"} borderRadius={"40px"}/>
            </Box>

            <Box textAlign={"center"}>
              <Button display={"inline-block"} mt={"24px"} color={"white"} bg={"green.600"} borderRadius={"50px"} height={"60px"} width={"200px"}>
                SIGN UP
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>


    </>
  )
}

export default signup
