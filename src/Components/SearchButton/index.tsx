import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import React, { FC } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const SearchButton: FC<Props> = (props: Props) => {
  return (
    <Box as={Flex}>
      <Button bgColor={"transparent"}>
        <Icon as={FontAwesomeIcon} icon={faSearch} />
      </Button>
    </Box>
  );
};

export default SearchButton;
