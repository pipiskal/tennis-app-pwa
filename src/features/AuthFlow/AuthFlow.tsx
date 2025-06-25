/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { MyButton } from "../../components/Button/Button";
import { Box } from "@mantine/core";
import s from "./AuthFlow.module.css";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
const AuthFlow = () => {
  const [currentView, setCurrentView] = useState("welcome");
  const navigate = useNavigate();

  const goToLogin = () => {
    console.log("go to login");
    setCurrentView("login");
    // Push a new entry to history stack
    navigate("/", { state: { view: "login", canGoBack: true }, replace: true });
  };

  const goToRegister = () => {
    setCurrentView("register");
    // Push a new entry to history stack
    navigate("/", {
      state: { view: "register", canGoBack: true },
      replace: true,
    });
  };

  const goToWelcome = () => {
    setCurrentView("welcome");
    // Push a new entry to history stack
    navigate("/", {
      state: { view: "welcome", canGoBack: false },
      replace: true,
    });
  };

  //   const views = {
  //     welcome: (
  //       <Box className={`${s.wrapper} ${s.welcomeViewWrapper}`}>
  //         <MyButton onClick={goToLogin} label="Login" />

  //         <MyButton onClick={goToRegister} label="Register" />
  //       </Box>
  //     ),
  //     login: (
  //       <Box className={`${s.wrapper} ${s.loginViewWrapper}`}>
  //         <Login onRegister={goToRegister} />
  //       </Box>
  //     ),
  //     register: (
  //       <Box className={`${s.wrapper} ${s.registerViewWrapper}`}>
  //         <Register onLogin={goToLogin} onWelcome={goToWelcome} />
  //       </Box>
  //     ),
  //   };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={currentView}
        initial={{ x: currentView === "welcome" ? 0 : -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
        style={
          {
            // border: "1px solid red",
            // height: "100vh",
          }
        }
      >
        {/* {views[currentView as keyof typeof views]} */}
        <div>takis</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthFlow;
