import React, { FC } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { SearchButton, StatusHeader, ProfileAvatar } from "Components";

let TopBar: FC = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={"1rem 1.5rem"}
      borderBottom={"1px solid #CDCDCD"}
    >
      <ProfileAvatar />
      <Box flexGrow={1}>
        <StatusHeader />
      </Box>
      <SearchButton />
    </Flex>
  );
};

export default TopBar;
