import { SearchIcon } from '@chakra-ui/icons'
import { Icon, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useEffect } from 'react'
import "../pages/top"

export const SearchInput=(props) => {

  const { todoSearchTitle, setTodoSearchTitle } = props

  useEffect(() => {
    console.log(todoSearchTitle)
  }, [todoSearchTitle])

  return (
    <InputGroup size='md' onSubmit={() => {}}>
      <Input
        pr='4.5rem'
        type='text'
        placeholder='Text'
        value={todoSearchTitle}
        onChange={(e) => setTodoSearchTitle(e.target.value)}
      />
      <InputRightElement width='4.5rem' >
        <IconButton  
        type='submit'
        variant='unstyled'
        icon={<SearchIcon />} />
      </InputRightElement>
    </InputGroup>
  )
}