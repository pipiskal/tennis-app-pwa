import s from "./AuthLayout.module.css";
import { Box, ScrollArea } from "@mantine/core";
import { useLocation, useOutlet } from "react-router";
import { AnimatePresence } from "framer-motion";
import AnimatedAuthPage from "../../../components/AnimateAuthPage/AnimatedAuthPage";

const AuthLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const currentOutlet = useOutlet();

  return (
    <Box className={`${s.wrapper}`}>
      <img
        src="./raketes.jpg"
        alt="an image display rackets"
        className={s.backgroundImage}
      />

      <ScrollArea
        h={"100%"}
        type="never"
        classNames={{ content: s.scrollAreaContent }}
      >
        <Box
          className={`flexColumnAlignJustifyCenter ${s.content} ${
            isHome && s.test
          }`}
        >
          <p style={{ fontSize: "36px", marginBottom: "24px" }}>Welcome to</p>

          <div className={s.logo} style={{ marginBottom: "24px" }} />

          <p style={{ fontSize: "16px", textAlign: "center" }}>
            Your ultimate tool for booking courts, tracking scores, and
            connecting with fellow players at the Keletron Tennis Club.
          </p>
        </Box>

        <AnimatePresence mode="wait" initial={false}>
          {currentOutlet && (
            <AnimatedAuthPage key={location.pathname}>
              {currentOutlet}
            </AnimatedAuthPage>
          )}
        </AnimatePresence>
      </ScrollArea>
    </Box>
  );
};

export default AuthLayout;
