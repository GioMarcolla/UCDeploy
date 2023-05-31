import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import { ProfileInfoView } from "Views";
import React, { FC } from "react";

type Props = {};

let HomePage: FC<Props> = (props: Props) => {
  const dw = window.outerWidth;
  return (
    <Box>
      <VStack spacing={dw * 0.04 + "px"} w={"100%"}>
          <ProfileInfoView />
          <ProfileInfoView />
          <ProfileInfoView />
      </VStack>
    </Box>
  );
};

export default HomePage;
