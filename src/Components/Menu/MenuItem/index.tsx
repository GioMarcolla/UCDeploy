import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

// Type ALL props, this helps reduce the need for smoke tests and prevents datartype errors ont he app.
// Typing the props also allows Editors to provide better suggestions.
type Props = {
  name: string;
  path: string;
  icon: ReactNode;
};

// NO Class Components unless 1000% needed!
let MenuItem: FC<Props> = ({ name, path, icon }: Props) => {
  return (
    <Box>
      <Link to={path}>
        <Flex flexDir={"column"} alignItems={"center"}>
          {icon}
          <Text variant={"soft"}>{name}</Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default MenuItem;
