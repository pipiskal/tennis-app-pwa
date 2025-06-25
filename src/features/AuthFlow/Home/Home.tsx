import { Box } from "@mantine/core";
import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";
import s from "./Home.module.css";
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
    // <motion.div
    //   initial={{ x: -300, opacity: 0 }}
    //   animate={{ x: 0, opacity: 1 }}
    //   exit={{ x: 300, opacity: 0 }}
    //   transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
    //   style={
    //     {
    //       // border: "1px solid red",
    //       // height: "100vh",
    //     }
    //   }
    // >
    <Box className={`${s.wrapper} ${s.welcomeViewWrapper}`}>
      <MyButton onClick={goToLogin} label="Login" />

      <MyButton onClick={goToRegister} label="Register" />
    </Box>
    // </motion.div>
  );
};

export default Home;
