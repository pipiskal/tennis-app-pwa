import { Box } from "@mantine/core";
import { useNavigate } from "react-router";
import s from "./Home.module.css";
import Button from "../../../components/ui-kit/Button/Button";
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
    <Box className={`${s.wrapper} ${s.welcomeViewWrapper}`}>
      <Button onClick={goToLogin} label="Login" />

      <Button onClick={goToRegister} label="Register" />
    </Box>
  );
};

export default Home;
