import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AuthLayout from "./AuthLayout/AuthLayout";
import { MyButton } from "../../components/Button/Button";
import { Box, Transition } from "@mantine/core";
import s from "./AuthFlow.module.css";

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

  return (
    <AuthLayout currentView={currentView}>
      <Transition
        mounted={currentView === "welcome"}
        transition="slide-left"
        duration={400}
        timingFunction="ease"
        enterDelay={400}
        exitDelay={0}
      >
        {(styles) => (
          <div style={{ ...styles, width: "100%" }}>
            <Box className={s.welcomeViewWrapper}>
              <MyButton onClick={goToLogin} label="Login" />

              <MyButton onClick={goToRegister} label="Register" />
            </Box>
          </div>
        )}
      </Transition>

      <Transition
        mounted={currentView === "login"}
        transition="slide-left"
        duration={400}
        timingFunction="ease"
        enterDelay={400}
        exitDelay={0}
      >
        {(styles) => (
          <div style={styles}>
            <Login onRegister={goToRegister} />
          </div>
        )}
      </Transition>

      <Transition
        mounted={currentView === "register"}
        transition="slide-left"
        duration={400}
        timingFunction="ease"
        enterDelay={400}
        exitDelay={0}
      >
        {(styles) => (
          <div style={styles}>
            <Register onLogin={goToLogin} />
          </div>
        )}
      </Transition>
    </AuthLayout>
  );
};

export default AuthFlow;
