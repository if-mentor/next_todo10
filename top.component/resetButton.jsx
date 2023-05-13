import { Box, Button } from "@chakra-ui/react"

export const ResetButton = () => {
  return (
    <Box>
      <Button colorScheme='green' variant='solid' ml='30px' mt='5' borderRadius='99'>Reset</Button>
      {/* 色の指定をするとボタンが消える B5B5B5 */}
    </Box>
  )
}