import { useNavigate } from "react-router";

type RegisterViewProps = {
  onLogin: () => void;
};

const Register = ({ onLogin }: RegisterViewProps) => {
  const navigate = useNavigate();

  return (
    <div onClick={onLogin}>
      <ol>
        <li onClick={() => navigate("/")}>Back to home - Welcome</li>

        <li onClick={() => navigate("/login")}>
          already have an account LOGIN !!
        </li>
      </ol>
    </div>
  );
};

export default Register;
