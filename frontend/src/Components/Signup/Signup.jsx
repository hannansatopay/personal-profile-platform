import React from "react";
import { Sunlight1 } from "../../icons/Sunlight1/Sunlight1";
import "../../styles/signup.css";
import { useNavigate } from 'react-router-dom';
export const Signup = () => {
  let navigate=useNavigate();
  return (
    <div className="signup">
      <div className="div">
       
      <input className="rectanglex" />
      <input className="rectangley" />
      <input className="rectanglez" />
        <div className="overlap-group">
         
          <input onClick={()=>navigate("/login")} typeof="button" className="rectangle-4" defaultValue={"Signup"}/>
        </div>
        <input className="rectangle-5" />

        <div className="rectangle-6" />
        <div className="rectangle-7" />
        <div className="text-wrapper-7">Male</div>
        <div className="text-wrapper-8">Female</div>
        <p className="already-have-an">
          <span className="span">Already have an account?</span>
          <span className="text-wrapper-9">&nbsp;</span>
          <span onClick={()=>navigate("/login")} className="text-wrapper-10">Log in</span>
        </p>
        <div className="text-wrapper-11">Sign up</div>
        
      </div>
    </div>
  );
};
