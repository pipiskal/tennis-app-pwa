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
    <div
      style={{
        height: "700px",
        // border: "6px solid orange"
      }}
    >
      <ol>
        <li onClick={goToWelcome}>Back to home - Welcome</li>

        <li onClick={goToLogin}>already have an account LOGIN !!</li>
      </ol>
    </div>
  );
};

export default Register;
