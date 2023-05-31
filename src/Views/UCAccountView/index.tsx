import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = {};

const UCAccountView: FC<Props> = (props: Props) => {
  const dw = window.outerWidth; // (dw - 8%) / 3.4 * 2.1 => dw * 0.44
  return (
    <Box>
      <Grid
        gap={dw * 0.04 + "px"}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(1, 1fr)"
        px={"4%"}
        w={"100%"}
        h={dw * 0.92 / 3.4 * 2.1 + "px"}
      >
        <GridItem backgroundColor={"red"}>
          1
        </GridItem>
      </Grid>
    </Box>
  );
};

export default UCAccountView;