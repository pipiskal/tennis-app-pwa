/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    console.log("go to login");
    // Push a new entry to history stack
    navigate("/login", {
      state: { view: "login", canGoBack: true },
      // replace: true,
    });
  };

  const goToWelcome = () => {
    // Push a new entry to history stack
    navigate("/", {
      state: { view: "welcome", canGoBack: false },
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
    <div>
      <ol>
        <li onClick={goToWelcome}>Back to home - Welcome</li>

        <li onClick={goToLogin}>already have an account LOGIN !!</li>
      </ol>
    </div>
    // </motion.div>
  );
};

export default Register;
