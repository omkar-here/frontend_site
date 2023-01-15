import "../assets/styles/steps.css"
export default function Steps(){
    return (
        <div className="steps">
        <div className="imggg">
            <img src="src\assets\images\steps\Group 416.png" />
        </div>
        
        <div className="right">
            <div style={{color: "#f00",fontSize: "14px"}}>Get Certified</div>
            <div><strong>Steps to become a CSM</strong></div>
            <div className="points">
            <li style={{marginBottom:"22px"}}><div className="btn btn-4">1</div><strong>Sign up for a CSM course </strong></li>
            <li style={{marginBottom:"22px"}}><div className="btn btn-4">2</div><strong>Participate in the 2 days CSM workshop</strong></li>
            <li style={{marginBottom:"22px"}}><div className="btn btn-4">3</div><strong>Pass an online examination </strong></li>
            <li style={{marginBottom:"22px"}}><div className="btn btn-4">4</div><strong>Receive your certification </strong></li>

            </div>
            </div>
        </div>
    )
}