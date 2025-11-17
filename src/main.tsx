import "./styles/globals.css";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import {
  Button,
  Input,
  MantineProvider,
  SegmentedControl,
  colorsTuple,
  createTheme,
} from "@mantine/core";
import type { MantineColorsTuple } from "@mantine/core";
import buttonStyles from "./styles/MantineComponents/Button.module.css";
import inputStyles from "./styles/MantineComponents/Input.module.css";
import segmentedControlStyles from "./styles/MantineComponents/SegmentedControl.module.css";
import App from "./app";

// IMPORTANT: initialize i18n before App renders
import "./i18n";
import dayjs from "./utils/dayjs-setup";
import i18n from "./i18n";

dayjs.locale(i18n.language.split("-")[0]); // 'en', 'el'

// update when language changes
i18n.on("languageChanged", (lng) => {
  const short = lng.split("-")[0]; // 'en-US' -> 'en'
  dayjs.locale(short);
});

const flatTen = (hex: string): MantineColorsTuple => colorsTuple(hex);

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
      // Main background color
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
    // Leave it for future use we will use the 2B485A color for the main background
    "background-main": flatTen("#2C485A"),
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
      defaultProps: {
        variant: "primary",
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      classNames: segmentedControlStyles,
      defaultProps: {
        variant: "primary",
      },
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
