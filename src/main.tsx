import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "@mantine/core/styles.css";

import App from "./App.tsx";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  components: {
    Text: {
      styles: {
        root: {
          fontFamily: "Inter",
        },
      },
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider forceColorScheme="dark" theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
);
