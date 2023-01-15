import React from "react"
import "../assets/styles/details.css"
export default function Cs_details(){
    return (
        <div class="cs-section">
            <section className="mini-nav">
            <li><strong style={{color: "#FB614C"}}>Overview</strong></li>
            <li>Get Certified</li>
            <li>Exam Details</li>
            <li>Why Skillbook</li>
            <li>Curriculum</li>
            <li>Career Path</li>
            <li>FAQs</li>
            </section>
            <section className="cs-details">
                <h2>Course Summary</h2>
                <div className="cs-desc">
                The Certified ScrumMaster course (CSM®) is a foundational course on the Scrum framework and an entry access to a high demand career in the agile world. To maximize the learning value for all types of professionals, our workshops are designed as real-time scrum projects. Using interactive assignments, role plays, simulations and many more fun learning activities, you will explore the concepts of scrum and gain hands-on implementation experience.
                </div>
            </section>
            <section className="blk">
                <img  className="blk-img" src="src\assets\images\ad\blk.png" />
                <div>
                <div className="black-1"><strong style={{color: "white"}}> <span style={{color: "#FB614C"}}>Highest Pass Rate</span> in the industry</strong></div>
                <div className="black-2" style={{color: "white"}}>If you are not able to pass the exam in the first attempt, Skillbook Academy  will allow you take a reattempt for free!</div>
                </div>
                
            </section>
        </div>
        
    )
}