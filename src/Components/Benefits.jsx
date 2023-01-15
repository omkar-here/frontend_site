import React from "react";
import "../assets/styles/benefits.css"
export default function Benefits(){
    return (
        <div className="bene_page">
        <div className="benefits">
            <div>
            <strong style={{fontSize:"26px",display: "block",paddingTop:"55px",paddingBottom:"34px"}}>Key Benefits</strong>

            <div className="tags">
                <div className="col1">
                    <li style={{marginBottom:"30.5px"}}><div className="btn btn-1"></div>Average Salary: <strong>$116K</strong></li>
                    <li style={{marginBottom:"30.5px"}}><div className="btn btn-2"></div>Average Salary Growth:<strong>24%</strong> </li>
                    <li><div className="btn btn-3"></div><strong>Top Job roles</strong></li>
                </div>
                <div className="col2">
                    <li style={{marginBottom:"30.5px"}}><div className="btn btn-4"></div><strong>Top companies </strong>Hiring</li>
                    <li ><div className="btn btn-4"></div><strong>Top companies </strong>Hiring</li>
                </div>
                <div className="col3">
                    <li ><div className="btn btn-6"></div><strong>Top 20</strong>Highest</li>
                </div>
            </div>
            </div>
            <div>
                <img src="src\assets\images\benefits\Frame.png" className="imgg" />
            </div>


        </div>
        </div>
    )
}