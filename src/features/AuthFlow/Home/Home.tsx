import { Box } from "@mantine/core";
import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";
import s from "./Home.module.css";
import AnimatedAuthPage from "../../../components/AnimateAuthPage/AnimatedAuthPage";
// import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    console.log("go to login");
    // setCurrentView("login");
    // Push a new entry to history stack
    navigate("/login", {
      state: { view: "login", canGoBack: true },
      // replace: true,
    });
  };

  const goToRegister = () => {
    // setCurrentView("register");
    // Push a new entry to history stack
    navigate("/register", {
      state: { view: "register", canGoBack: true },
      // replace: true,
    });
  };

  return (
    <AnimatedAuthPage>
      <Box className={`${s.wrapper} ${s.welcomeViewWrapper}`}>
        <MyButton onClick={goToLogin} label="Login" />

        <MyButton onClick={goToRegister} label="Register" />
      </Box>
    </AnimatedAuthPage>
  );
};

export default Home;
