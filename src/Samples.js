// import { Link } from "react-router-dom";

function Samples() {
    return (
        <div className="samples-body-div" >
            <div className="samples-text">
                <p className="sample-p" >featured work</p>
                <h1 className="sample-h1" >See highlighted websites<br/>by Erik Russell.</h1>
            </div>

            <div className="sample-work-div" >

            <a target="_blank" rel="noreferrer" id="green" href="https://kaltrunner.github.io/agreensquare.github.io/" > <div className="sample-work-example" >
                <img className="project-1" src="the green square gif.gif" alt="green square project website"/>
                </div><p className="project-1-text" >A GREEN SQUARE PROJECT</p></a>
                
                <a target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner/Rudy" > <div className="sample-work-example" >
                    <img className="project-1"  src="Screenshot 2023-02-21 at 11.54.40 AM.png" alt="" />
                </div><p className="project-1-text" >.Rudy</p></a>

                <a target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner/Snake-Pit-Game" > <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-02-21 at 12.14.33 PM.png" alt=""/>
                </div><p className="project-1-text" >Snake Pit</p></a>

                <a target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner/design-system-sid.github.io" > <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-03-02 at 12.27.12 PM (2).png" alt=""/>
                </div></a>

                <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-02-21 at 12.11.01 PM.png" alt=""/>
                </div>

                {/* <div className="sample-work-example" ></div>

                <div className="sample-work-example" ></div> */}
            </div>

        </div>
    )
}

export default Samples