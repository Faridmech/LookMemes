import { Box, Image, Input } from "@chakra-ui/react"
import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { useState } from "react"
import { Catagories } from "./components/catagories"
export const Home: React.FC = () => {
  const [inputText, setInputText] = useState<string>("")

  return (
    <>
      <Box bg="black" height="100vh">
        <Box
          display="flex"
          height="76px"
          borderBottom="1px solid #313442"
          padding="18px, 0px, 18px, 0px"
          justifyContent="center"
          alignItems="center">
          <Box
            height="40px"
            width="1298px"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <Image src="/Left.png" />
            <Box
              width="380px"
              height="40px"
              bg="#30313C"
              display="flex"
              alignItems="center"
              justifyContent="space-between">
              <Input
                paddingLeft="20px"
                placeholder="Serach"
                fontSize="14px"
                lineHeight="20px"
                bg="transparent"
                border="none"
                height="30px"
                width="300px"
                focusBorderColor="red"
                color="#9B9D9F"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <Box marginRight="20px">
                <AiOutlineSearch color="#9B9D9F" fontSize="20px" />
              </Box>
            </Box>
          </Box>
        </Box>

        <Catagories />
      </Box>
    </>
  )
}
