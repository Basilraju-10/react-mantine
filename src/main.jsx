import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import { RouterProvider } from "react-router-dom";
import router from "./lib/router";

import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider
    theme={theme}
    defaultColorScheme="light"
  >
    <RouterProvider router={router} />
  </MantineProvider>
);