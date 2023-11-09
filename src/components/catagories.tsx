import { Center, Box, Button, Input, Stack } from "@chakra-ui/react"
import { DragHandleIcon, DeleteIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"
import SavedCategories from "./SavedCategories"
import React from "react"
import { useState } from "react"
import { CustomSwitch } from "./CustomSwitch"

export const Catagories: React.FC = () => {
  const [showInput, setShowInput] = useState(false)
  const [categoryName, setCategoryName] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [Categories, setCategories] = useState<string[]>([])

  const handleButtonClick = () => {
    setShowInput(true)
  }

  const handleSaveCategory = () => {
    setCategories((prevCategories) => [...prevCategories, categoryName])
    setShowInput(false)
    setCategoryName("")
  }
  const handleCancel = () => {
    setShowInput(false)
    setCategoryName("")
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      <Center>
        <Stack spacing={4}>
          <Box>
            <Button
              onClick={handleButtonClick}
              marginTop="40px"
              width="638px"
              height="50px"
              color="white"
              bg="#884DFE"
              colorScheme="purple">
              + Create Category
            </Button>
          </Box>
          {showInput && (
            <Box>
              <Box
                display="flex"
                alignItems="center"
                gap="5px"
                border="1px solid grey">
                <Input
                  focusBorderColor="transparent"
                  borderRadius="0"
                  border="none"
                  color="grey"
                  flex="1"
                  placeholder="Enter category name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
                <CustomSwitch
                  isChecked={isActive}
                  onChange={() => setIsActive(!isActive)}
                />

                <IconButton
                  aria-label=""
                  size="sm"
                  bg="transparent"
                  icon={<DeleteIcon />}
                  color="#FFFFFF"
                  colorScheme="red"
                />
                <IconButton
                  aria-label=""
                  size="sm"
                  bg="transparent"
                  icon={<DragHandleIcon />}
                  color="#FFFFFF"
                  colorScheme="purple"
                />
              </Box>
            </Box>
          )}
          <SavedCategories
            Categories={Categories}
            setCategories={setCategories}
          />
        </Stack>
      </Center>

      {showInput && (
        <Box
          marginTop="32rem"
          height="100px"
          bg="gray.200"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingX="4">
          <Button
            width="48%"
            height="40px"
            color="white"
            bg="#884DFE"
            colorScheme="purple"
            onClick={handleSaveCategory}>
            Save Category
          </Button>
          <Button
            width="48%"
            height="40px"
            color="white"
            bg="#884DFE"
            colorScheme="purple"
            onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      )}
    </Box>
  )
}
