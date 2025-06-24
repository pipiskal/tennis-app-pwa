import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {' '}
      <ol>
        <li onClick={() => navigate('/login')}>Login</li>

        <li onClick={() => navigate('/register')}>Register</li>

        <li onClick={() => navigate('/welcome')}>
          <div>click to navigate to welcome</div>
        </li>
      </ol>
    </div>
  );
};

export default Home;
