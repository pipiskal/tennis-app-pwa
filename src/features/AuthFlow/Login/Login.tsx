import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";

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
    <div
      style={{
        padding: 32,
        height: 600,
        // border: "6px solid green",
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
  );
};

export default Login;
