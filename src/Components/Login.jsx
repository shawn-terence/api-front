
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from '../App';


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const loginResponse = await axios.post(`${BASE_URL}/login`, {
        username: username,
        password: password
      });
  
      if (loginResponse.status === 200) {
        setErrorMessage("");
        const token = loginResponse.data.token;
  
        localStorage.setItem('token', token);
  
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
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
<div >
  <div ></div>
  <div >
    <h5 >
      Login
    </h5>
    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
  </div>
  <div >
    <form onSubmit={handleSubmit} >
      <div>
        <label >Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />
      </div>
      <div>
        <label >Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
      </div>
      <button 
        type="submit" 
      >
        Login
      </button>
    </form>
  </div>
</div>

  );

}