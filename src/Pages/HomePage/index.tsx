import React, { FC } from "react";
import { ProfileInfoView, UCAccountView, HomeBottomView } from "Views";
import { Box, VStack } from "@chakra-ui/react";

type Props = {};

const HomePage: FC<Props> = (props: Props) => {
  const dw = window.outerWidth;
  return (
    <Box>
      <VStack
        gap={dw * 0.04 + "px"}
        py={dw * 0.04 + "px"}
        align={"stretch"}
        spacing="0px"
      >
        <ProfileInfoView />
        <UCAccountView />
        <HomeBottomView />
      </VStack>
    </Box>
  );
};

export default HomePage;
