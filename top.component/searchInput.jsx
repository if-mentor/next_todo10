import { Search2Icon } from '@chakra-ui/icons'
import { Input } from '@chakra-ui/react'

export const SearchInput = () => {
  return (
    <div>
      <Input type='text' onChange={() => {}} placeholder='Text'/>
      <button><Search2Icon /></button>
    </div>
  )
}