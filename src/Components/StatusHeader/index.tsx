import { Box, Flex, Text } from "@chakra-ui/react";
import { StatusMarker }  from "Components";
import React, { FC } from "react";

type Props = {};

const StatusHeader: FC<Props> = (props: Props) => {
  return (
    <Box p={"0 1rem"}>
      <Text variant={"soft"} fontSize={"lg"}>
        Night Owl
      </Text>
      <Flex>
        <StatusMarker currStatus={"active"} />
        <Text variant={"soft"} fontSize={"15px"} color={"purple.light"}>
          Signed-in at SCH
        </Text>
      </Flex>
    </Box>
  );
};

export default StatusHeader;
