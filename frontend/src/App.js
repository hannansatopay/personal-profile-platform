import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import {Achievement} from './Components/Achievement/Achievement';
import {Contact} from './Components/Contact/Contact';
import {Edit} from './Components/Edit/Edit';
import {Experience} from './Components/Experience/Experience';
import {Login} from './Components/Login/Login';
import {Signup} from './Components/Signup/Signup';
import {Skills} from './Components/Skills/Skills';
import { Project } from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/achievement" element={<Achievement/>} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/edit" element={<Edit/>} />
         <Route path="/project" element={<Project/>} />
         <Route path="/experience" element={<Experience/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>} />
         <Route path="/skill" element={<Skills/>} />
      </Routes>
        </Router>
    </div>
  );
}

export default App;
