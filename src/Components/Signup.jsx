
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from '../App';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gmail, setGmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

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
    <div>
      <div></div>
      <div>
        <h5>Signup</h5>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Gmail:</label>
            <input
              type="email"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
            />
          </div>
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
}
