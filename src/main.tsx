/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
// import AppLayout from "./layouts/AppLayout/AppLayout";
// import FindAnOpponent from "./features/Application/MainMenu/FindAnOpponent/FindAnOpponent";
// import HomeScreen from "./features/Application/MainMenu/HomeScreen/HomeScreen";
// import MakeABooking from "./features/Application/MainMenu/MakeABooking/MakeABooking";
// import MyAccount from "./features/Application/MainMenu/MyAccount/MyAccount";
// import MyBookings from "./features/Application/MainMenu/MyBookings/MyBookings";
// import AuthLayout from "./features/AuthFlow/AuthLayout/AuthLayout";
// import Home from "./features/AuthFlow/Home/Home";
// import Login from "./features/AuthFlow/Login/Login";
// import Register from "./features/AuthFlow/Register/Register";
// import Notifications from "./features/Application/Notifications/Notifications";
// import Notification from "./features/Application/Notifications/Notification/Notification";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";
import "@mantine/core/styles.css";
import { MantineProvider, colorsTuple, createTheme } from "@mantine/core";
// import NotificationsRoute from "./routes/notifications";
import buttonStyles from "./styles/MantineComponents/Button.module.css";
import { motion } from "framer-motion";
import AuthFlow from "./features/AuthFlow/AuthFlow";
import AuthLayout from "./features/AuthFlow/AuthLayout/AuthLayout";

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
    Button: {
      classNames: buttonStyles,
      defaultProps: {
        color: "primary",
      },
    },
  },
});

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            {/* <Route element={<AuthLayout />}> */}
            <Route
              index // <-- "/"
              element={<AuthFlow />}
            />
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
