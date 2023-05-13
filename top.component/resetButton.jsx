import { Box, Button } from "@chakra-ui/react"

export const ResetButton = () => {
  return (
    <Box>
      <Button colorScheme='green' variant='solid'>Reset</Button>
      {/* 色の指定をするとボタンが消える B5B5B5 */}
    </Box>
  )
}