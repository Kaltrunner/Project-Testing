import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-body-div">
      <div className="extra-line"></div>
      <div className="menu-span">
        <Link className="menu-links" to="/About">
          <p className="about-text">About/</p>
        </Link>

        <a
          className="menu-links"
          target="_blank"
          rel="noreferrer"
          href="mailto:erikrussells@gmail.com?subject=Hello!"
        >
          <p className="about-text">Email/</p>
        </a>

        <p className="about-text">Resumé/</p>

        <a
          className="menu-links"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/erik-russell-software-engineer/"
        >
          <p className="about-text">Linkedin/</p>
        </a>

        <Link className="menu-links" to="/Projects">
          <p className="about-text">Projects/</p>
        </Link>

        <a
          className="menu-links"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Kaltrunner"
        >
          <p className="about-text">Github/</p>
        </a>

        <a
          className="menu-links"
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@erikrussells"
        >
          <p className="about-text">Blog/</p>
        </a>
      </div>
      <div className="extra-line"></div>
    </div>
  );
}

export default Menu;
