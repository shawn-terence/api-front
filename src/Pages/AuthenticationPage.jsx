import React, { useState } from "react";
import Login from "../Components/Login"; 
import Signup from "../Components/Signup" 

export default function AuthenticationPage() {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <div className="authentication-page">
      <div className="authentication-form">
        {isLogin ? <Login /> : <Signup />}
      </div>
      <div className="toggle-buttons">
        <button onClick={() => setIsLogin(true)}>Login</button>
        <button onClick={() => setIsLogin(false)}>Signup</button>
      </div>
    </div>
  );
}