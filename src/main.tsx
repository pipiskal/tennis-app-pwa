/* eslint-disable react-refresh/only-export-components */
import "./styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import "@mantine/core/styles.css";
import { MantineProvider, colorsTuple, createTheme } from "@mantine/core";
import buttonStyles from "./styles/MantineComponents/Button.module.css";
import AuthLayout from "./features/AuthFlow/AuthLayout/AuthLayout";
import Home from "./features/AuthFlow/Home/Home";
import Login from "./features/AuthFlow/Login/Login";
import Register from "./features/AuthFlow/Register/Register";
import { AnimatePresence, motion } from "framer-motion";

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
  initial: {
    opacity: 0,
    x: "-100%", // Start from left
  },
  in: {
    opacity: 1,
    x: 0, // Center position
  },
  out: {
    opacity: 0,
    x: "100%", // Exit to left
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
} as const;

// Animated wrapper component for each page
const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    // style={{
    //   position: "absolute",
    //   width: "100%",
    //   height: "100%",
    // }}
  >
    {children}
  </motion.div>
);

// Animated route components
const AnimatedHome = () => (
  <AnimatedPage>
    <Home />
  </AnimatedPage>
);

const AnimatedLogin = () => (
  <AnimatedPage>
    <Login />
  </AnimatedPage>
);

const AnimatedRegister = () => (
  <AnimatedPage>
    <Register />
  </AnimatedPage>
);

// Routes wrapper with AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<AuthLayout />}>
          <Route index element={<AnimatedHome />} />
          <Route path="/login" element={<AnimatedLogin />} />
          <Route path="/register" element={<AnimatedRegister />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
