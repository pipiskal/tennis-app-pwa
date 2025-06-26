import { Box, Input } from "@mantine/core";
import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";

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

  return (
    <Box p={20}>
      <Box style={{ fontSize: "18px", textAlign: "center" }}>
        {/* Create your account */}
        <p onClick={goToLogin}>Already have an account? Login</p>
      </Box>

      <br />

      <Input placeholder="First name" type="text" mb={24} size="md" />

      <Input placeholder="Last name" type="text" mb={24} size="md" />

      <Input placeholder="Email" type="email" mb={24} size="md" />

      <Input placeholder="Password" type="password" mb={24} size="md" />

      <Box
        mb={24}
        p={"0 32px"}
        style={{
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        By creating your account, you agree to our Terms of Use and Privacy
        Policy.
      </Box>

      <MyButton
        label={"Create your account"}
        onClick={() => console.log("I will register")}
      />

      {/* <Box style={{ height: "1px", backgroundColor: "white" }} mt={32} /> */}

      {/* <br /> */}

      {/* <p onClick={goToLogin}>Already have an account? Login</p> */}
    </Box>
  );
};

export default Register;
