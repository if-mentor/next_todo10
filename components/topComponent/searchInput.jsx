import { SearchIcon } from '@chakra-ui/icons'
import {IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { useEffect} from 'react'
import "../../pages/top"

export const SearchInput=(props) => {

  const { searchTitle, setSearchTitle, searchWord } = props

  useEffect(() => {
    console.log(searchTitle)
  }, [searchTitle])

  //Enterで発火する
  const handleKeyDown = (event) => {
    if(event.key === "Enter") {
      searchWord();
    }
  };

  return (
    <InputGroup size='md' 
    >
      <Input
        pr='4.5rem'
        type='text'
        placeholder='Text'
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <InputRightElement width='4.5rem' >
        <IconButton  
        variant='unstyled'
        icon={<SearchIcon />} 
        onClick={searchWord}
        />
      </InputRightElement>
    </InputGroup>
  )
}