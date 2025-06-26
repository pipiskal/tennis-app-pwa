import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";
import { Box, Checkbox, Flex, Input } from "@mantine/core";

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
    <Box p={20}>
      <Box style={{ fontSize: "18px", textAlign: "center" }}>
        {/* Login for existing users */}
        <p onClick={goToRegister}>New here? Create an account </p>
      </Box>

      <br />

      <Input placeholder="Email" type="email" mb={8} size="md" />

      <Input placeholder="Password" type="password" mb={16} size="md" />

      <Flex mb={48} justify={"space-between"}>
        {/* <Flex> */}
        <Checkbox label="Remember me" />
        {/* </Flex>   */}
        <p>Forgot Password/</p>
      </Flex>

      <Box
        mb={24}
        style={{
          fontSize: "12px",
        }}
      >
        By logging in, you agree to our Terms of Use and Privacy Policy.
      </Box>

      <MyButton label={"Login"} onClick={() => console.log("I will Login")} />

      {/* <Box style={{ height: "1px", backgroundColor: "white" }} mt={32} /> */}

      {/* <br /> */}

      {/* <p onClick={goToRegister}>New here? Create an account </p> */}
    </Box>
  );
};

export default Login;
