import React from "react";
import "../../styles/login.css";
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  let navigate=useNavigate();
  return (
    <div className="login">
      <div className="div">
        <img
          className="rectangle"
          alt="Rectangle"
          src="https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/653bc8d5604ac7cec9b6898f/img/rectangle-14.png"
        />
        <input placeholder="Email" type="email" className="rectangle-2" />
        <input placeholder="Password" type="password" className="rectangle-3" />
        <div onClick={()=>navigate("/signup")} className="text-wrapper-3">Create an account</div>
        <div className="text-wrapper-4">Forgot Password</div>
        <div className="text-wrapper-5">Login</div>
        <div onClick={()=>navigate("/")} className="overlap-group">
          <div typeof="button" className="text-wrapper-6">Login</div>
        </div>
      </div>
    </div>
  );
};
