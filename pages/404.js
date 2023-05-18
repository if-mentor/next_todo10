import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
        <meta name="description" content="Team Development 10th" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Heading
        bg="green.300"
        h="80px"
        pl="100px"
        display="flex"
        alignItems="center"
      >
        TODO
      </Heading>

      <Flex
        alignItems="center"
        height="100vh"
        flexDirection="column"
        m="184px 100px 0px 100px"
      >
          <Text
            height="151px"
            fontSize="64px"
            fontFamily="Roboto"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="75px"
            textTransform="uppercase"
          >
            404
          </Text>

        <Text
        height="59px"
        fontSize="24px"
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="700"
        lineHeight="29px"
        mb="65px"
        >This is not the web page you are looking for.</Text>
          <Button
            box-sizing="border-box"
            border="1px solid blackAlpha.800"
            bg="pink.100"
            borderRadius="50px"
            w="113px"
            h="50px"
          >
            TOP
          </Button>
      </Flex>
    </>
  );
};

export default NotFound;
