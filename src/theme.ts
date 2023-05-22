import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: { // Need the color pallet from Bill, at leats 4 shades per color
    green: {
      100: "",
      200: "",
      400: "",
      800: ""
    },
    red: {},
    purple: {},
    blue: {},
    white: {},
    black: {},
  },
})

export default theme