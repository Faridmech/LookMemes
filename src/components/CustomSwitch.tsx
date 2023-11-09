import { Switch, Box, Text } from "@chakra-ui/react"
import React from "react"
interface CustomSwitchProps {
  isChecked: boolean
  onChange: () => void
}

export const CustomSwitch: React.FC<CustomSwitchProps> = ({
  isChecked,
  onChange,
}) => {
  return (
    <Box position="relative">
      <Switch
        isChecked={isChecked}
        onChange={onChange}
        size="lg"
        bg="transparent"
        colorScheme="whiteAlpha"
      />
      <Text
        fontSize="12px"
        position="absolute"
        top="50%"
        color={isChecked ? "green" : "red"}
        fontWeight="bold"
        left={isChecked ? "0" : "auto"}
        right={isChecked ? "auto" : "0"}
        transform="translateY(-50%)">
        {isChecked ? "On" : "Off"}
      </Text>
    </Box>
  )
}
