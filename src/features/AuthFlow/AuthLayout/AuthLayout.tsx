import { Box } from "@mantine/core";
import s from "./AuthLayout.module.css";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import AnimatedAuthPage from "../../../components/AnimateAuthPage/AnimatedAuthPage";

const AuthLayout = () => {
  const location = useLocation();
  console.log(location.pathname);
  const currentView = location.pathname.split("/").pop();

  return (
    <Box className={`${s.wrapper}`}>
      <img
        src="./raketes.jpg"
        alt="an image display rackets"
        className={s.backgroundImage}
      />

      <div className={s.contentPlaceholder} />

      <Box
        className={`flexColumnAlignJustifyCenter ${s.content} ${
          (currentView === "login" || currentView === "register") &&
          s.loginRegisterContent
        }`}
      >
        <p style={{ fontSize: "36px", marginBottom: "24px" }}>Welcome to</p>

        <div className={s.logo} style={{ marginBottom: "24px" }} />

        <p style={{ fontSize: "16px", textAlign: "center" }}>
          Your ultimate tool for booking courts, tracking scores, and connecting
          with fellow players at the Keletron Tennis Club.
        </p>
      </Box>

      <AnimatePresence mode="wait" initial={false}>
        <AnimatedAuthPage key={location.pathname}>
          <Outlet />
        </AnimatedAuthPage>
      </AnimatePresence>
    </Box>
  );
};

export default AuthLayout;
