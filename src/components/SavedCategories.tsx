import { useRef } from "react"
import React, { useState, Dispatch, SetStateAction } from "react"
import {
  Box,
  Text,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react"
import { DragHandleIcon, DeleteIcon } from "@chakra-ui/icons"
import { CustomSwitch } from "./CustomSwitch"

interface SavedCategoriesProps {
  Categories: string[]
  setCategories: Dispatch<SetStateAction<string[]>>
}

const SavedCategories: React.FC<SavedCategoriesProps> = ({
  Categories,
  setCategories,
}) => {
  const [savedCategoriesState, setSavedCategoriesState] = useState<boolean[]>(
    Categories.map(() => false)
  )

  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const onCloseDeleteConfirmation = () => setDeleteIndex(null)
  const cancelRef = useRef<HTMLButtonElement | null>(null)

  const handleSwitchChange = (index: number) => {
    setSavedCategoriesState((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = !newStates[index]
      return newStates
    })
  }

  const handleDeleteClick = (index: number) => {
    setDeleteIndex(index)
  }

  const handleDeleteConfirm = () => {
    setCategories((prevCategories) => {
      const newCategories = [...prevCategories]
      newCategories.splice(deleteIndex!, 1)
      return newCategories
    })
    setSavedCategoriesState((prevStates) => {
      const newStates = [...prevStates]
      newStates.splice(deleteIndex!, 1)
      return newStates
    })
    onCloseDeleteConfirmation()
  }

  return (
    <>
      {Categories.map((savedCategory, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          gap="5px"
          border="1px solid grey"
          marginTop="10px"
          padding="5px">
          <Text flex="1" color={savedCategoriesState[index] ? "white" : "grey"}>
            {savedCategory}
          </Text>
          <CustomSwitch
            isChecked={savedCategoriesState[index]}
            onChange={() => handleSwitchChange(index)}
          />
          <IconButton
            aria-label=""
            size="sm"
            bg="transparent"
            icon={<DeleteIcon />}
            color="#FFFFFF"
            colorScheme="red"
            onClick={() => handleDeleteClick(index)}
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
      ))}

      {/* AlertDialog for delete confirmation */}
      <AlertDialog
        isOpen={deleteIndex !== null}
        onClose={onCloseDeleteConfirmation}
        leastDestructiveRef={cancelRef}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Delete Category</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to delete this category?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={handleDeleteConfirm}>
                Delete
              </Button>
              <Button ref={cancelRef} onClick={onCloseDeleteConfirmation}>
                Cancel
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default SavedCategories
