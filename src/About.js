import { Link } from "react-router-dom";

function About() {
    return (
        <>
        
        <Link to="/Menu" ><button className="about-button-back" >back</button></Link>
        <Link to="/" ><button className="about-button-home" >home</button></Link>

        <div className="about-body-div" >
            
            <span className="about-span" ><h1 className="about-h1" >Erik Russell</h1> <h3>Softwear Engineer</h3></span>

        <div className="about-line" ></div>

        </div>
        </>
    )
}

export default About