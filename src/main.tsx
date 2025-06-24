import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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
// import NotificationsRoute from "./routes/notifications";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
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

            <Route path="/dashboard/make-booking" element={<MakeABooking />} />

            <Route
              path="/dashboard/find-opponent"
              element={<FindAnOpponent />}
            />

            <Route path="/dashboard/account" element={<MyAccount />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
