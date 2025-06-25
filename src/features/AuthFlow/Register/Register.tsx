type RegisterViewProps = {
  onLogin: () => void;
  onWelcome: () => void;
};

const Register = ({ onLogin, onWelcome }: RegisterViewProps) => {
  return (
    <div>
      <ol>
        <li onClick={onWelcome}>Back to home - Welcome</li>

        <li onClick={onLogin}>already have an account LOGIN !!</li>
      </ol>
    </div>
  );
};

export default Register;
