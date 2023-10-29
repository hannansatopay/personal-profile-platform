import React from "react";
import "../styles/home.css";
import { useNavigate } from 'react-router-dom';
import {Navbar} from "../Components/Navbar/Navbar";
export const Home = () => {
  let navigate=useNavigate();
  return (
    <div>
    <div className="home">
      <div className="div">
        <Navbar />
        <img
          className="rectangle"
          alt="Rectangle"
          src="https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/653bc8d5604ac7cec9b6898f/img/rectangle-1.png"
        />
        <div className="text-wrapper-8">MRS. COLE</div>
        <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="overlap-2">
          <div className="rectangle-2" />
          <p className="text-wrapper-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque dignissim imperdiet. In
            aliquam luctus sem in cursus. In hac habitasse platea dictumst. Aliquam sagittis neque eros. Etiam euismod
            lobortis ante nec dapibus. Duis at tellus consequat, pellentesque augue vel, dignissim dolor. Pellentesque
            vestibulum tellus dui, nec sagittis magna scelerisque in. Phasellus quis quam auctor, sollicitudin lectus
            ut, imperdiet dolor.
          </p>
        </div>
        <div className="overlap-3">
          <div className="rectangle-3" />
          <div className="text-wrapper-10">Contact Me</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-11">Know me more</div>
        </div>     
        <div className="overlap-4">
          <div className="text-wrapper-12">Resume</div>
          
        </div>
      </div>
    </div>
    </div>
  );
};
