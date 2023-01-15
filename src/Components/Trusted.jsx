import React from "react";
import "../assets/styles/trusted.css"
export default function Trusted() {
    return (
        <div className="trusted">
            <div className="top_trusted">
                <div>
                    <div className="title">Trusted</div>
                    <div className="content">Become an instructor, inspire change and change lives — including your own. The best part, You won’t have to do it alone. We’ll provide all the tools and skills to teach what you love and take it in front of people that need it. </div>

                </div>
                <div className="boxes">
                    <div className="box">
                        <strong style={{ color: "#FB5741", fontSize: "35px" }}>1000+</strong>
                        <div className="small_text">Students</div>
                    </div>
                    <div className="box">
                        <strong style={{ color: "#FB5741", fontSize: "35px" }}>50+</strong>
                        <div className="small_text">Instructors</div>
                    </div>
                    <div className="box">
                        <strong style={{ color: "#FB5741", fontSize: "35px" }}>2000+</strong>
                        <div className="small_text">Online review</div>
                    </div>
                    <div className="box">
                        <strong style={{ color: "#FB5741", fontSize: "35px" }}>20+</strong>
                        <div className="small_text">Courses</div>
                    </div>
                </div>
            </div>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="imgs">
                            <img src="src\assets\images\Trusted\Frame 14559.png" alt="" className="img_1" />
                            <img src="src\assets\images\Trusted\Frame 14561.png" alt="" className="img_2" />
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className="imgs">
                            <img src="src\assets\images\Trusted\Frame 14559.png" alt="" className="img_1" />
                            <img src="src\assets\images\Trusted\Frame 14561.png" alt="" className="img_2" />
                        </div>
                        </div>
                        <div class="carousel-item">
                            <div className="imgs">
                                <img src="src\assets\images\Trusted\Frame 14559.png" alt="" className="img_1" />
                                <img src="src\assets\images\Trusted\Frame 14561.png" alt="" className="img_2" />
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <div className="indicators">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                </div>
                </div>
                
            </div>
            // </div>
            )
}