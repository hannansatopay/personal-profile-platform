import React from "react";
import { Sunlight3 } from "../../icons/Sunlight3/Sunlight3";
import { useNavigate } from 'react-router-dom';
import "../../styles/contact.css";
export const Contact = () => {
  let navigate=useNavigate();
  return (
    <div className="contact">
      <div className="div">
        <div className="overlap-groupc">
          <div className="overlapc">
            <div className="text-wrapper">Contact number</div>
            <div className="rectangle" />
          </div>
          <div className="overlap-2">
            <div className="text-wrapper-2">Address</div>
            <div className="rectangle" />
          </div>
          <div className="text-wrapper-3">Email id</div>
          <div className="text-wrapper-4">Social media links</div>
          <div className="overlap-3">
            <div className="text-wrapper-5">LinkedIn</div>
            <div className="ellipse" />
            <i class='bx bxl-linkedin-square' ></i>
          </div>
          <div className="text-wrapper-7">Github</div>
          <div className="text-wrapper-8">Instagram</div>
          <div className="text-wrapper-9">Twitter</div>
          <div className="div-wrapper">
          <i class='bx bxl-github'></i>
          </div>
          <div className="overlap-4">
          <i class='bx bxl-instagram'></i>
          </div>
          <div className="overlap-5">
          <i class='bx bxl-twitter' ></i>
          </div>
          <div className="rectangle-2" />
        </div>
        <div className="text-wrapper-13">Contact Me</div>
        <div className="overlap-6">
        <div onClick={()=>navigate("/")} className="text-wrapper-14">Home</div>
    <div onClick={()=>navigate("/contact")} className="text-wrapper-15">Contact me</div>
    <div onClick={()=>navigate("/achievement")} className="text-wrapper-16">Certifications</div>
    <div onClick={()=>navigate("/project")} className="text-wrapper-17">Projects</div>
    <div onClick={()=>navigate("/skill")} className="text-wrapper-18">Skills</div>
    <div onClick={()=>navigate("/experience")} className="text-wrapper-19">Experience</div>
          <div className="overlap-7">
            <div className="ellipse-2" />
            <Sunlight3 className="sunlight" />
          </div>
          <div onClick={()=>navigate("/achievement")} className="text-wrapper-20">Achievements</div>
        </div>
        
      </div>
    </div>
  );
};
