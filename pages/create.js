import Head from "next/head";
import {
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Box,
  Text,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const TodoCreate = () => {
  return (
    <>
      <Head>
        <title>Todo Create</title>
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

      <Box mr="100px" ml="100px" w="1080px" h="104px">
        <Box pb="15px" h="63" display="flex" justifyContent="space-between">
          <Text w="141px" h="33px" mt="23px" fontSize="24px">
            NEW TODO
          </Text>
          <Button
            box-sizing="border-box"
            bg="green.300"
            border="blackAlpha.800"
            borderRadius="50px"
            w="112px"
            h="40px"
            mt="23px"
          >
            Back
          </Button>
        </Box>
        <form>
          <Box w="100%" margin="0 auto">
            <FormControl w="1080px" h="104px" mb="15px">
              <FormLabel htmlFor="title">TITLE</FormLabel>
              <Input
                h="50%"
                id="title"
                type="text"
                value=""
                placeholder="Text"
              />
            </FormControl>
            <FormControl marginBottom="16px">
              <FormLabel htmlFor="description">DETAIL</FormLabel>
              <Textarea id="description" value="" placeholder="Text" />
            </FormControl>
            <FormControl>
              <FormLabel>PRIORITY</FormLabel>
              <RadioGroup value="">
                <HStack spacing="24px">
                  <Radio value="male">High</Radio>
                  <Radio value="female">Middle</Radio>
                  <Radio value="other">Low</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              box-sizing="border-box"
              bg="green.600"
              color="green.50"
              border="blackAlpha.800"
              borderRadius="50px"
              w="112px"
              h="40px"
              ml="0"
            >
              CREATE
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default TodoCreate;
