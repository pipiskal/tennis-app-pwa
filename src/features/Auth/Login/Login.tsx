import { useNavigate } from "react-router";
import { MyButton } from "../../../components/Button/Button";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: 32,
      }}
    >
      <ol>
        <p>Hello</p>
        <li onClick={() => navigate("/")}>Back to home - Welcome 333</li>

        <li onClick={() => navigate("/register")}>
          Do not have an account Register !!
        </li>

        <li onClick={() => navigate("/dashboard")}>LOGIN!!!!!!</li>
      </ol>
      <br />

      <br />

      <MyButton label={"Log in"} onClick={() => console.log("dadada")} />

      <br />

      <br />
    </div>
  );
};

export default Login;
