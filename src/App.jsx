import React from "react";
import NavBar from "./Components/Navbar";
import "./assets/styles/page.css"
import Cs_details from "./Components/cs_details";
import Ad from "./Components/Ad";
import Benefits from "./Components/Benefits";
import Earn from "./Components/Earn";
import Skill from "./Components/skill";
import Topics from "./Components/Topics";
import Trusted from "./Components/Trusted";
import Steps from "./Components/Steps";
import Example from "./Components/Example";
import Footer from "./Components/Footer";
import InfoFooter from "./Components/InfoFooter";
export default function App(){
  return (
    <div className="page">
        <NavBar /> 
        <Ad />
       <Cs_details />
         <Benefits />
        <Skill />
         <Earn />
        
       
        <Trusted />
        <Topics />
        <Steps />
        
        <Example /> 
        <Footer />
        <InfoFooter />
    </div>
    
  )
}