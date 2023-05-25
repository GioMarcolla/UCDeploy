import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  colors: {
    // Need the color pallet from Bill, at leats 4 shades per color
    green: {
      UC: "#73B3A3",
      light: "#DBEBE7",
      grey: "#B2C3AE",
      dark: "#114135",
    },
    red: {
      UC: "#C88181",
      light: "#EED1CC",
      grey: "#BC9696",
      dark: "#770000",
    },
    purple: {
      UC: "#5B5081",
      light: "#8D93BA",
      grey: "#9B9DA8",
      dark: "#2E2353",
    },
    blue: {
      UC: "#5C7BA1",
      light: "#C1D9F8",
      grey: "#C5CCD6",
      dark: "#1F395A",
    },
    white: {
      UC: "#EFEFEF",
      grey: "#CDCDCD",
    },
    black: {
      UC: "#1D1D1D",
      light: "#CDCDCD",
      grey: "#ACACAC",
      dark: "#000000",
    },
  },
  components: {
    Icon: {
      variants: {
        UCMenuItem: (props: StyleFunctionProps) => ({
          color: props.colorMode === "dark" ? "purple.UC" : "purple.light",
          boxSize: "2rem",
        }),
      },
    },
  },
});

export default theme;
