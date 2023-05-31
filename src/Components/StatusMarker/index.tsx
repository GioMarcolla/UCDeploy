import React, { FC } from "react";
import { Box, Circle, Flex } from "@chakra-ui/react";

type Props = {
  currStatus: string;
};

let StatusMarker: FC<Props> = ({ currStatus }: Props) => {
  //Grab user status from store
  const status:string = currStatus;

  type colorTypes = {
    active: string;
    busy: string;
    away: string;
    offline: string;
  };

  const statusColors: colorTypes = {
    active: "green",
    busy: "red",
    away: "orange",
    offline: "grey",
  };

  return (
    <Box as={Flex}>
      <Circle size="1rem" bg={statusColors[status as keyof colorTypes] || "grey"} />
    </Box>
  );
};

export default StatusMarker;
