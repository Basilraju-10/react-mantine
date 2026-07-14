import { createTheme } from "@mantine/core";

const theme = createTheme({
  primaryColor: "green",

  colors: {
    green: [
      "#eef8f2",
      "#d9f0e2",
      "#b3dfc5",
      "#8bcea7",
      "#66bd89",
      "#3eac6b",
      "#0B7A3E",
      "#096634",
      "#075229",
      "#043d1f",
    ],
  },

  fontFamily: "Inter, sans-serif",

  defaultRadius: "md",

  headings: {
    fontFamily: "Inter, sans-serif",
  },

  components: {
    Button: {
      defaultProps: {
        radius: "md",
        size: "md",
      },
    },

    Paper: {
      defaultProps: {
        radius: "lg",
        shadow: "xs",
        withBorder: true,
      },
    },

    Card: {
      defaultProps: {
        radius: "lg",
        shadow: "xs",
        withBorder: true,
      },
    },

    TextInput: {
      defaultProps: {
        radius: "md",
      },
    },

    Select: {
      defaultProps: {
        radius: "md",
      },
    },

    NumberInput: {
      defaultProps: {
        radius: "md",
      },
    },
  },
});

export default theme;