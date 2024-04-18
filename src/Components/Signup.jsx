import { useState } from "react";
import axios from "axios";
import { BASE_URL } from '../App';
import movieLogo from '../assets/movie.png';

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const registerResponse = await axios.post(`${BASE_URL}/register`, {
        username: username,
        password: password,
        gmail: gmail
      });
  
      if (registerResponse.status === 201) {
        setErrorMessage("");
        setSuccessMessage("Signup successful! Please login.");
        console.log('signed up');
      } else {
        setErrorMessage("Signup failed");
      }
    } catch (error) {
      setErrorMessage("Signup failed");
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <img className="h-32 w-auto mb-8" src={movieLogo} alt="Movie Logo" />
      <h5 className="text-center text-8xl text-red-500 mb-4">Sign up</h5>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
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
        <div>
          <input
            className="text-black text-4xl mt-3"
            type="email"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            placeholder="Gmail"
          />
        </div>
        <button className="bg-red-500 px-5 rounded-lg m-5 text-4xl" type="submit">Signup</button>
      </form>
    </div>
  );
}
