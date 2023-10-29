import React from "react";
import { Sunlight4 } from "../../icons/Sunlight4/Sunlight4";
import "../../styles/achievement.css";
import { useNavigate } from 'react-router-dom';
export const Achievement = () => {
  let navigate=useNavigate();
  return (
    <div className="achievement">
      <div className="div">
        <div className="frame">
          <div className="overlap-group">
            <div className="text-wrapper">Image</div>
          </div>
          <div className="text-wrapper-2">Name of the achievement</div>
          <div className="text-wrapper-3">Year</div>
          <div className="text-wrapper-4">Description</div>
          <div className="div-wrapper">
            <div className="text-wrapper-5">URL</div>
          </div>
        </div>
        <div className="frame-2">
          <div className="overlap-group">
            <div className="text-wrapper-6">Image</div>
          </div>
          <div className="text-wrapper-2">Name of the achievement</div>
          <div className="text-wrapper-3">Year</div>
          <div className="text-wrapper-7">Description</div>
          <div className="frame-3">
            <div className="text-wrapper-5">URL</div>
          </div>
        </div>
   
        <div className="text-wrapper-9">Achievements</div>
        <div className="overlap-2">
             <div onClick={()=>navigate("/")} className="text-wrapper-10">Home</div>
    <div onClick={()=>navigate("/contact")} className="text-wrapper-11">Contact me</div>
    <div onClick={()=>navigate("/achievement")} className="text-wrapper-12">Certifications</div>
    <div onClick={()=>navigate("/project")} className="text-wrapper-13">Projects</div>
    <div onClick={()=>navigate("/skill")} className="text-wrapper-14">Skills</div>
    <div onClick={()=>navigate("/experience")} className="text-wrapper-15">Experience</div>
          <div className="overlap-3">
            <div className="ellipse" />
            <Sunlight4 className="sunlight" />
          </div>
          <div onClick={()=>navigate("/achievement")} className="text-wrapper-16">Achievements</div>
        </div>
      </div>
    </div>
  );
};
