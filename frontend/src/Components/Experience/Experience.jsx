import React from "react";
import { Sunlight6 } from "../../icons/Sunlight6/Sunlight6";
import "../../styles/experience.css";
import { useNavigate } from 'react-router-dom';
export const Experience = () => {
  let navigate=useNavigate();
  return (
    <div className="experience">
      <div className="div">
        <div className="text-wrapper">Experience</div>
        <div className="frame">
          <div className="text-wrapper-2">Name of the Company</div>
          <div className="text-wrapper-3">Read more</div>
          <div className="text-wrapper-4">Designation</div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          
        </div>
        <div className="frame-2">
          <div className="text-wrapper-2">Name of the Company</div>
          <div className="text-wrapper-3">Read more</div>
          <div className="text-wrapper-4">Designation</div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          
        </div>
        <div className="frame-3">
          <div className="text-wrapper-2">Name of the Company</div>
          <div className="text-wrapper-3">Read more</div>
          <div className="text-wrapper-4">Designation</div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
         
        </div>
        <div className="frame-4">
          <div className="text-wrapper-2">Name of the Company</div>
          <div className="text-wrapper-3">Read more</div>
          <div className="text-wrapper-4">Designation</div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
         
        </div>
        <div className="frame-5">
          <div className="text-wrapper-2">Name of the Company</div>
          <div className="text-wrapper-3">Read more</div>
          <div className="text-wrapper-4">Designation</div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          
        </div>
        <div className="frame-6">
          <div className="text-wrapper-2">Name of the Company</div>
          <div className="text-wrapper-3">Read more</div>
          <div className="text-wrapper-4">Designation</div>
          <p className="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          
        </div>
        <div className="overlap-groupe">
        <div onClick={()=>navigate("/")} className="text-wrapper-5">Home</div>
    <div onClick={()=>navigate("/contact")} className="text-wrapper-6">Contact me</div>
    <div onClick={()=>navigate("/achievement")} className="text-wrapper-7">Certifications</div>
    <div onClick={()=>navigate("/project")} className="text-wrapper-8">Projects</div>
    <div onClick={()=>navigate("/skill")} className="text-wrapper-9">Skills</div>
    <div onClick={()=>navigate("/experience")} className="text-wrapper-10">Experience</div>
          <div className="overlap">
            <div className="ellipse" />
            <Sunlight6 className="sunlight" />
          </div>
          <div onClick={()=>navigate("/achievement")} className="text-wrapper-11">Achievements</div>
        </div>
      </div>
    </div>
  );
};
