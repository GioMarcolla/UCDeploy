import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

// Type ALL props, this helps reduce the need for smoke tests and prevents datartype errors ont he app.
// Typing the props also allows Editors to provide better suggestions.
type Props = {
  name: string;
  path: string;
  icon: ReactNode;
  currPath: string;
};

// NO Class Components unless 1000% needed!
const MenuItem: FC<Props> = ({ name, path, icon, currPath }: Props) => {
  return (
    <Box w={"15% !important"}>
      <Link to={path}>
        <Flex flexDir={"column"} alignItems={"center"}>
          {icon}
          <Text
            variant={"soft"}
            fontSize={"sm"}
            color={"/" + currPath === path ? "green.UC" : "purple.UC"}
          >
            {name}
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default MenuItem;
