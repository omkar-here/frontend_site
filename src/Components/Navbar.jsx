import React from "react"
import logo from "../assets/images/navbar/logo.png"
import "../assets/styles/nav.css"
export default function NavBar(){
    return (
        <nav className="out_nav">
        <div className="main--nav">
            <img src={logo} className="icon" />
            <div className="nav-text">
                
                <li><a href="#" >Instructors</a></li>
                <li><a href="#" >Resources</a></li>
                <li><a href="#" >Corporate</a></li>
            
                
            </div>
            <button className="button nav--btn"><span style={{color:"white",fontWeight:"bold"}}>Contact Us</span></button>
        </div>
        </nav>
    )
}