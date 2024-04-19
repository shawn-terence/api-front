import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from '../App';
import movieLogo from '../assets/movie.png'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const loginResponse = await axios.post(`${BASE_URL}/login`, {
        username: username,
        password: password
      });

      if (loginResponse.status === 200) {
        const token = loginResponse.data.token;

        // Set token in axios headers
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        // Store token in local storage
        localStorage.setItem('token', token);

        setErrorMessage("");
        navigate('/');
        console.log('logged in');
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      setErrorMessage("Invalid username or password");
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img className="h-32 w-auto mb-8" src={movieLogo} alt="Movie Logo" />
      <h5 className="text-center text-8xl text-red-500 mb-4">Login</h5>
      {errorMessage && <p>{errorMessage}</p>}
      <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
        <div>
          <input
            className="text-black m-3 text-4xl"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            className="text-black text-4xl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button className="bg-red-500 px-5 rounded-lg text-4xl m-5" type="submit">Login</button>
      </form>
    </div>
  );
}
