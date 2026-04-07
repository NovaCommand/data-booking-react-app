import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  }; // Implement login logic and dispatch actions as needed

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;