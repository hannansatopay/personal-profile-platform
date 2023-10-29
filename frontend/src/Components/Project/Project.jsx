import React from "react";
import { Sunlight } from "../../icons/Sunlight/Sunlight";
import "../../styles/project.css";
import { useNavigate } from 'react-router-dom';
export const Project = () => {
  let navigate=useNavigate();
  return (
    <div className="project">
      <div className="div">
        <div className="overlap-group">
        <div onClick={()=>navigate("/")} className="text-wrapper">Home</div>
    <div onClick={()=>navigate("/contact")} className="text-wrapper-2">Contact me</div>
    <div onClick={()=>navigate("/achievement")} className="text-wrapper-3">Certifications</div>
    <div onClick={()=>navigate("/project")} className="text-wrapper-4">Projects</div>
    <div onClick={()=>navigate("/skill")} className="text-wrapper-5">Skills</div>
    <div onClick={()=>navigate("/experience")} className="text-wrapper-6">Experience</div>
          <div onClick={()=>navigate("/achievement")} className="text-wrapper-7">Achievements</div>
          <div className="overlap">
            <div className="ellipse" />
            <Sunlight className="sunlight" />
          </div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-8">My Projects</div>
          <img
            className="group"
            alt="Group"
            src="https://cdn.animaapp.com/projects/653e35db073999452845184d/releases/653e360e4e89f359aa42ba19/img/group-1@2x.png"
          />
          <img
            className="img"
            alt="Group"
            src="https://cdn.animaapp.com/projects/653e35db073999452845184d/releases/653e360e4e89f359aa42ba19/img/group-7@2x.png"
          />
          <img
            className="group-2"
            alt="Group"
            src="https://cdn.animaapp.com/projects/653e35db073999452845184d/releases/653e360e4e89f359aa42ba19/img/group-12@2x.png"
          />
          <img
            className="group-3"
            alt="Group"
            src="https://cdn.animaapp.com/projects/653e35db073999452845184d/releases/653e360e4e89f359aa42ba19/img/group-12@2x.png"
          />
          <img
            className="group-4"
            alt="Group"
            src="https://cdn.animaapp.com/projects/653e35db073999452845184d/releases/653e360e4e89f359aa42ba19/img/group-12@2x.png"
          />
          <img
            className="group-5"
            alt="Group"
            src="https://cdn.animaapp.com/projects/653e35db073999452845184d/releases/653e360e4e89f359aa42ba19/img/group-12@2x.png"
          />
        </div>
       
      </div>
    </div>
  );
};
