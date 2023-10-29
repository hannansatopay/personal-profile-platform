import React from 'react'
import "../../styles/navbar.css";
import { Sunlight5 } from "../../icons/Sunlight5/Sunlight5";
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
  let navigate=useNavigate();
  return (
  
    <div className="overlap">
    <div style={{cursor:"pointer"}} onClick={()=>navigate("/")} className="text-wrapper">Home</div>
    <div style={{cursor:"pointer"}} onClick={()=>navigate("/contact")} className="text-wrapper-2">Contact me</div>
    <div style={{cursor:"pointer"}} onClick={()=>navigate("/achievement")} className="text-wrapper-3">Certifications</div>
    <div style={{cursor:"pointer"}} onClick={()=>navigate("/project")} className="text-wrapper-4">Projects</div>
    <div style={{cursor:"pointer"}} onClick={()=>navigate("/skill")} className="text-wrapper-5">Skills</div>
    <div style={{cursor:"pointer"}} onClick={()=>navigate("/experience")} className="text-wrapper-6">Experience</div>
    <div style={{cursor:"pointer"}} onClick={()=>navigate("/achievement")} className="text-wrapper-7">Achievements</div>
    <div className="overlap-group">
      <Sunlight5 className="sunlight" />
  </div>
  </div>

   
  )
}

