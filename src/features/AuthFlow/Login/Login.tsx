import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";
import AnimatedAuthPage from "../../../components/AnimateAuthPage/AnimatedAuthPage";

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
    <AnimatedAuthPage>
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
    </AnimatedAuthPage>
  );
};

export default Login;
