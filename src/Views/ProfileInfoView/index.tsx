import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {};

const ProfileInfoView: FC<Props> = (props: Props) => {
  const dw = window.outerWidth; // dw - 12% /2 => dw * 0.44
  return (
    <Box>
      <Grid
        gap={dw * 0.04 + "px"}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(2, 1fr)"
        px={"4%"}
        w={"100%"}
        h={dw * 0.44 + "px"}
      >
        <GridItem backgroundColor={"red"}>
          1
        </GridItem>
        <GridItem backgroundColor={"green"}>
          2
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProfileInfoView;