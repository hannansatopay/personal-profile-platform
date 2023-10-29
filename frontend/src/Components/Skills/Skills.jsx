import React from "react";
import { Sunlight2 } from "../../icons/Sunlight2/Sunlight2";
import "../../styles/skills.css";
import { useNavigate } from 'react-router-dom';
export const Skills = () => {
  let navigate=useNavigate();
  return (
    <div className="skills">
      <div className="div">
        <div className="frame">
          <div className="text-wrapper">Name of the Skill</div>
          <div className="text-wrapper-2">Description</div>
          <div className="ellipse" />
        </div>
        <div className="frame-2">
          <div className="text-wrapper-3">Name of the Skill</div>
          <div className="text-wrapper-2">Description</div>
          <div className="ellipse-2" />
        </div>
        <div className="frame-3">
          <div className="text-wrapper-3">Name of the Skill</div>
          <div className="text-wrapper-2">Description</div>
          <div className="ellipse-2" />
        </div>
        <div className="frame-4">
          <div className="text-wrapper-3">Name of the Skill</div>
          <div className="text-wrapper-2">Description</div>
          <div className="ellipse-2" />
        </div>
        <div className="frame-5">
          <div className="text-wrapper-3">Name of the Skill</div>
          <div className="text-wrapper-2">Description</div>
          <div className="ellipse-2" />
        </div>
        <div className="frame-6">
          <div className="text-wrapper-3">Name of the Skill</div>
          <div className="text-wrapper-2">Description</div>
          <div className="ellipse-2" />
        </div>
        <div className="frame-7">
          <div className="text-wrapper-3">Name of the Skill</div>
          <div className="text-wrapper-2">Description</div>
          <div className="ellipse-2" />
        </div>
        <div className="frame-8">
          <div className="text-wrapper-3">Name of the Skill</div>
          <div className="text-wrapper-2">Description</div>
          <div className="ellipse-2" />
        </div>
        <div className="text-wrapper-4">Skills</div>
        <div className="div-2">
          <div className="div-2" />
          <div onClick={()=>navigate("/")} className="text-wrapper-5">Home</div>
    <div onClick={()=>navigate("/contact")} className="text-wrapper-6">Contact me</div>
    <div onClick={()=>navigate("/achievement")} className="text-wrapper-7">Certifications</div>
    <div onClick={()=>navigate("/project")} className="text-wrapper-8">Projects</div>
    <div onClick={()=>navigate("/skill")} className="text-wrapper-9">Skills</div>
    <div onClick={()=>navigate("/experience")} className="text-wrapper-10">Experience</div>
          <div className="ellipse-3" />
          <Sunlight2 className="sunlight" />
          <div onClick={()=>navigate("/achievement")} className="text-wrapper-11">Achievements</div>
        </div>
      </div>
    </div>
  );
};
