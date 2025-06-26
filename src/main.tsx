import "./styles/globals.css";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import {
  Button,
  Input,
  MantineProvider,
  colorsTuple,
  createTheme,
} from "@mantine/core";
import buttonStyles from "./styles/MantineComponents/Button.module.css";
import inputStyles from "./styles/MantineComponents/Input.module.css";
import App from "./app";

// TODO : this can be moved outside
const theme = createTheme({
  colors: {
    customPink: colorsTuple("#FFC0CB"),
    primary: [
      "#E7EBED",
      "#CFD6DB",
      "#B7C2C9",
      "#9FAEB7",
      "#8799A4",
      "#708592",
      "#587180",
      "#2B485A",
      "#10344A",
      "#092535",
    ],
    secondary: [
      "#FEFFF0",
      "#FDFFE2",
      "#FBFED3",
      "#FAFEC4",
      "#F9FEB5",
      "#F8FEA7",
      "#F7FE98",
      "#F5FD89",
      "#F4FD7B",
      "#F3FD6C",
    ],
    text: [
      "#FFFFFF",
      "#EAEAEB",
      "#D4D5D7",
      "#BFC1C3",
      "#A9ACAF",
      "#93979B",
      "#7E8288",
      "#696D74",
      "#535960",
      "#3E444C",
      "#282F38",
    ],
  },
  components: {
    Button: Button.extend({
      classNames: buttonStyles,
      defaultProps: {
        variant: "primary",
      },
    }),
    Input: Input.extend({
      classNames: inputStyles,
      // defaultProps: {
      //   variant: "primary",
      // },
    }),
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
