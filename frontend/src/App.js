import {Template1} from "../src/components/Templates/Template1/Template1"
import {Template2} from "../src/components/Templates/Template2/Template2";
import {Projects} from "../src/components/Projects/Projects";
import {Signup} from "../src/components/Signup/Signup";
import {Signin} from "../src/components/Signin/Signin";
import {Home} from "../src/components/Home/Home";
import {Certificate} from "../src/components/Certificates/Certificate";
import {Achievements} from "../src/components/Achievements/Achievements";
import {Education} from "../src/components/Education/Education";
import {ForgetPassword} from "../src/components/ForgetPassword/ForgetPassword";
import {Profile} from "../src/components/Profile/Profile";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
  <>
   <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/resume1" element={<Template1/>} />
        <Route path="/resume2" element={<Template2/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/achievements" element={<Achievements/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/forgotpass" element={<ForgetPassword/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
        </Router>
        </>
  
  );
}

export default App;
