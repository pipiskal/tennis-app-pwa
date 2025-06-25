/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    // Push a new entry to history stack
    navigate("/register", {
      state: { view: "register", canGoBack: true },
      // replace: ,
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
    <div
      style={{
        padding: 32,
        height: 400,
      }}
    >
      <ol>
        <p>Hello</p>

        <li onClick={goToRegister}>Do not have an account Register !!</li>
      </ol>
      <br />

      <br />

      <MyButton label={"Log in"} />

      <br />

      <br />
    </div>
    // </motion.div>
  );
};

export default Login;
