import { Box } from "@mantine/core";
import s from "./AuthLayout.module.css";
// import { motion } from "framer-motion";
// import { Outlet } from "react-router-dom";
import { useMounted } from "@mantine/hooks";

type AuthLayoutProps = {
  children: React.ReactNode;
  currentView: string;
};

const AuthLayout = ({ children, currentView }: AuthLayoutProps) => {
  const mounted = useMounted();

  console.log("mounted", mounted);

  return (
    <Box className={`flexColumnAlignJustifyCenter ${s.wrapper}`}>
      <img
        src="./raketes.jpg"
        alt="an image display rackets"
        className={s.backgroundImage}
      />

      {/* add a motion div that will help with the jumping when other elements get inject below */}

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      > */}
      <Box
        // key={currentView}
        className={`flexColumnAlignJustifyCenter ${s.content} ${
          currentView === "login" && s.loginView
        } ${currentView === "welcome" && s.welcomeView}
        ${currentView === "register" && s.registerView}
        `}
      >
        <p style={{ fontSize: "36px", marginBottom: "24px" }}>Welcome to</p>

        <div className={s.logo} style={{ marginBottom: "24px" }} />

        <p style={{ fontSize: "16px", textAlign: "center" }}>
          Your ultimate tool for booking courts, tracking scores, and connecting
          with fellow players at the Keletron Tennis Club.
        </p>
      </Box>
      {/* </motion.div> */}

      {children}
      {/* <Outlet /> */}
    </Box>
  );
};

export default AuthLayout;
