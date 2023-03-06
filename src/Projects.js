import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="projects-body-div">

      <div className="menu-header-div-body">
        <Link to="/Menu">
          <button className="menu-header-button">X</button>
        </Link>
      </div>

      <div className="about-body-div">
      <span className="about-span">
          <h1 className="about-h1">Projects</h1>
        </span>

        <div className="about-line"></div>
        </div>

    </div>
  );
}

export default Projects;
