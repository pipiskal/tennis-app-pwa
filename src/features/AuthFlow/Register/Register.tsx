import { useNavigate } from "react-router";
import AnimatedAuthPage from "../../../components/AnimateAuthPage/AnimatedAuthPage";

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
    <AnimatedAuthPage>
      <div>
        <ol>
          <li onClick={goToWelcome}>Back to home - Welcome</li>

          <li onClick={goToLogin}>already have an account LOGIN !!</li>
        </ol>
      </div>
    </AnimatedAuthPage>
  );
};

export default Register;
