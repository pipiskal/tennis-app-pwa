import "./styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/Layouts/AppLayout/AppLayout";
import FindAnOpponent from "./features/Application/MainMenu/FindAnOpponent/FindAnOpponent";
import HomeScreen from "./features/Application/MainMenu/HomeScreen/HomeScreen";
import MakeABooking from "./features/Application/MainMenu/MakeABooking/MakeABooking";
import MyAccount from "./features/Application/MainMenu/MyAccount/MyAccount";
import MyBookings from "./features/Application/MainMenu/MyBookings/MyBookings";
import AuthLayout from "./features/Auth/AuthLayout/AuthLayout";
import Home from "./features/Auth/Home/Home";
import Login from "./features/Auth/Login/Login";
import Register from "./features/Auth/Register/Register";
import Notifications from "./features/Application/Notifications/Notifications";
import Notification from "./features/Application/Notifications/Notification/Notification";
import BaseLayout from "./components/Layouts/BaseLayout/BaseLayout";
import "@mantine/core/styles.css";
import { MantineProvider, colorsTuple, createTheme } from "@mantine/core";
// import NotificationsRoute from "./routes/notifications";
import buttonStyles from "./styles/MantineComponents/Button.module.css";

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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout />}>
            {/* This route is responsive for the public Auth pages Welcome - Login - Register */}
            <Route element={<AuthLayout />}>
              <Route
                index // <-- "/"
                element={<Home />}
              />

              <Route path="login" element={<Login />} />

              <Route path="register" element={<Register />} />
            </Route>

            <Route
              path="/welcome"
              element={<div>This is the welcome page</div>}
            />

            <Route path="/dashboard" element={<AppLayout />}>
              <Route
                index // <-- "/dashboard"
                element={<HomeScreen />}
              />

              <Route path="/dashboard/notifications">
                <Route
                  index // <-- "/dashboard/notifications"
                  element={<Notifications />}
                />

                <Route
                  path=":notificationId" // <-- "/dashboard/notifications/:notificationId"
                  element={<Notification />}
                />
              </Route>

              <Route path="/dashboard/my-bookings" element={<MyBookings />} />

              <Route
                path="/dashboard/make-booking"
                element={<MakeABooking />}
              />

              <Route
                path="/dashboard/find-opponent"
                element={<FindAnOpponent />}
              />

              <Route path="/dashboard/account" element={<MyAccount />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
