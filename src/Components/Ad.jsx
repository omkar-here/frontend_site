import React from "react"
// import ad_video from "../assets/images/ad/ad_video.png"
import "../assets/styles/ad.css"
export default function Ad() {
    return (
    <div className="ad">
            <div className="ad-left">
                <section className="ad-nav">
                    <li>Home</li>
                    <li>Courses</li>
                    <li ><strong className="scrum">Scrum</strong></li>
                </section>

                <section className="ad-main">
                    <h1 className="ad-title">Certified ScrumMaster (CSM)® Training & Certification</h1>
                    <div className="ad-content">Accelerate your career by becoming a Certified ScrumMaster®. Our two-day CSM training course will take you through everything you need to know about Scrum. Accelerate your career by becoming a Certified ScrumMaster®. Our two-day CSM training course will take you through everything you need to know about Scrum.</div>
                    <ul className="ad-pts">
                        <li><img src="src\assets\images\ad\Student Registration.png"/>99% Exam Pass Rate</li>
                        <li><img src="src\assets\images\ad\Audio.png"/>10+ Industry Leading Trainers</li>
                        <li><img src="src\assets\images\ad\Thumbs Up.png"/>15+ Workshops in a Month</li>
                        <li><img src="src\assets\images\ad\Thumbs Up.png"/>15+ Workshops in a Month</li>
                    </ul>
                    <img className="ad-img" src="src\assets\images\ad\Ratings.png" />
                </section>
            </div>
        <div className="ad-right">
            <img src="src\assets\images\ad\ad-video.png" className="ad_video" />
            <section className="labels">
            <div className="row1">
                <span className="btn--best_seller">BEST SELLLER</span>
                <span className="btn--tag">100% positive reviews(1.9k)</span>
                </div>
                <div className="row2">
                <span className="btn--tag"><img src="src\assets\images\ad\Student Registration.png"/>1000+ students</span>
                <span className="btn--tag">English</span>
                </div>
            </section>
            <div style={{color : " #9A9A9A"}}>
                Starting from <strong ><del style={{color : " #9A9A9A"}}>$995</del></strong><strong  style={{color: "#FB5741",fontSize:"33px"}}>$445</strong>
            </div>
            
        </div>
    </div>

    
    )
}