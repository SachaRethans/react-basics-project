// This component provides a styled text input field

import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const TextInput = ({ changeFn, ...props }) => (
  <InputGroup>
    <Input
      variant="flushed"
      color="black"
      fontWeight="thin"
      onChange={changeFn}
      placeholder="Search by keyword"
      _placeholder={{ color: "gray.500" }}
      borderColor="black"
      boxShadow="none"
      sx={{ borderRadius: "0 !important" }}
      size={{ base: "sm", md: "sm", lg: "sm" }}
      _hover={{
        borderColor: "black",
        borderRadius: "0",
      }}
      _focus={{
        borderColor: "black",
        boxShadow: "none",
        borderRadius: "0",
      }}
      {...props}
    />
    <InputRightElement pointerEvents="none">
      <SearchIcon w={3} h={3} color="black" />
    </InputRightElement>
  </InputGroup>
);
