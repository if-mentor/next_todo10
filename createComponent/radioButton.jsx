import { HStack, Radio, RadioGroup } from "@chakra-ui/react";
import "../pages/create"

export const RadioButton = (props) => {

  const {todoPriority, setTodoPriority} = props

  const PriorityCollection = ["High", "Middle", "Low"]

  return (
    <>
      <RadioGroup onChange={setTodoPriority} value={todoPriority}>
        <HStack spacing="30px">
          {PriorityCollection.map((value, index) => {
            return <Radio value={value} key={index}>{value}</Radio>
          })}
        </HStack>
      </RadioGroup>
    </>
  )
}