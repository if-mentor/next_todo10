import { Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Spacer,
    Heading,
    Textarea,
    HStack,
    VStack,
    Text,
    Container } from '@chakra-ui/react';
import Head from 'next/head'

const EditTodo =()=>{
    return(
        <>
            <Box w='100%'
                h='80px'
                bg='green.300'
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Flex
                    w='85%'
                    maxW='1080px'
                >
                    <Heading
                        maxW='1080px'
                        color='blackAlpha.800'
                        fontSize='48px'
                        fontWeight='bold'
                    >
                    TODO
                    </Heading>
                </Flex>
            </Box>

            <Container
                w='85%'
                maxW='1080px'
                pt='16px'
            >
                <VStack>
                    <Flex w={'100%'}>
                        <Heading as='h2'
                            fontSize='28px'
                            fontWeight='bold'
                        >
                            EDIT TODO
                        </Heading>
                        <Spacer />
                        <Button
                            w={28}
                            bg='green.300'
                            rounded='full'
                            borderWidth='1px'
                            borderColor='blackAlpha.800'
                        >
                            Back
                        </Button>
                    </Flex>
                    <Box w='100%'>
                        <FormControl mb='20px'>
                            <FormLabel
                                fontSize='24px'
                                fontWeight='bold'
                                lineHeight={1}
                            >
                                TITLE
                            </FormLabel>
                            <Input
                                h='70px'
                                fontSize='20px'
                                rounded='10px'
                                type='text'
                                borderColor='blackAlpha.800'
                                placeholder='Github上に静的サイトをホスティングする' 
                            />
                        </FormControl>
                        <FormControl mb='20px'>
                            <FormLabel
                                fontSize='24px'
                                fontWeight='bold'
                                lineHeight={1}
                            >
                                DETAIL
                            </FormLabel>
                            <Textarea
                                h='320px'
                                rounded='10px'
                                borderColor='blackAlpha.800'
                                fontSize='20px'
                                placeholder='AWS コンソールで AWS Amplify を使って静的ウェブサイトをホスティングします。AWS Amplify は、静的ウェブサイトおよびウェブアプリにフルマネージドのホスティングを提供します。Amplify のホスティングソリューションは、Amazon CloudFront と Amazon S3 を使って、AWS コンテンツ配信ネットワーク (CDN) を介してサイトアセットを提供します。'
                            >
                              
                            </Textarea>
                        </FormControl>

                        <Flex mt={1}>
                            <Flex direction ='column' mr={27}>
                                <Text>Create</Text>
                                <Text fontSize='20px'>2020-11-8 18:55</Text>
                            </Flex>
                            <Flex direction ='column'>
                                <Text>Update</Text>
                                <Text fontSize='20px'>2020-11-8 18:55</Text>
                            </Flex>
                            <Spacer />
                            <Button
                                w={28}
                                bg='green.600'
                                rounded='full'
                                color='green.50'
                                borderWidth='1px'
                                borderColor='blackAlpha.800'
                            >
                                UPDATE
                            </Button>
                        </Flex>
                    </Box>
                </VStack>
            </Container>
        </>
    )
}
export default EditTodo;
