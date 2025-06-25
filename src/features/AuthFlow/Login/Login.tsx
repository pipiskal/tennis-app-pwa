import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";

type LoginViewProps = {
  onRegister: () => void;
};

const Login = ({ onRegister }: LoginViewProps) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: 32,
        height: 400,
      }}
    >
      <ol>
        <p>Hello</p>

        <li onClick={onRegister}>Do not have an account Register !!</li>
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
