import { useState } from "react";
import Login from "../Components/Login"; 
import Signup from "../Components/Signup";
import Navbar from "../Components/Navbar";

export default function AuthenticationPage() {
  const [isLogin, setIsLogin] = useState(true); 

  return (
    <>
    <Navbar/>
    <div className="authentication-page flex flex-col items-center justify-center h-screen bg-black text-white font-jolly-lodger">
      <div className="authentication-form">
        {isLogin ? <Login /> : <Signup />}
      </div>
      <div className="toggle-buttons flex text-4xl items-center mt-8 bg-black text-white">
        <button className="m-2 rounded-md" onClick={() => setIsLogin(true)}>Login</button>
        <button className="m-2 rounded-md" onClick={() => setIsLogin(false)}>Signup</button>
      </div>
    </div>
    </>
  );
}
