import { Link } from "react-router-dom";
import { ScrollToTop } from 'react-router-scroll-to-top';

function About() {
  return (
    <div className="about-div">
      <div className="menu-header-div-body">
        <Link to="/">
          <button className="menu-header-button">X</button>
        </Link>
      </div>

      {/* <Link to="/Menu">
        <button className="about-button-back">back</button>
      </Link>
      <Link to="/">
        <button className="about-button-home">home</button>
      </Link> */}

      <div className="about-body-div">
        <span className="about-span">
          <h1 className="about-h1">Erik Russell</h1> <h3>Softwear Engineer</h3>
        </span>

        <div className="about-line"></div>

        

        <div className="about-p-text">

        <div className="about-img-div" >
            <img id="about-img" src="../image0.jpeg" alt="Erik Russell" />
          </div>
          
          <p id="p-1" >
            I am a passionate software engineer with a strong track record of
            delivering top-notch software solutions.
            <br />
            As a software engineer, I believe in constantly learning and
            exploring new technologies to stay ahead of the curve.
            <br /> My curiosity and drive have led me to work on a variety of
            projects.
            <br /> Currently, I'm working on front-end leaking projects that
            help improve user experience and engagement.
            <br /></p>
            <p id="p-2" >My technical skill set includes proficiency in various programming
            languages such as HTML, CSS, JavaScript, React and Rails.
            <br /> Additionally, I have experience working with databases, cloud
            computing, and DevOps.
            <br />
            I am seeking positions where I can use my technical expertise to
            contribute to challenging and innovative projects.
            <br /> I am passionate about working on projects that have a
            significant impact and can help solve real-world problems.
            <br />
            What sets me apart as a software engineer is my ability to work
            collaboratively with cross-functional teams,
            <br /> communicate effectively, and thrive in dynamic and fast-paced
            environments.
            <br /> I am a problem-solver at heart, and I enjoy taking on
            challenges and finding creative solutions.
            <br />
            If you're looking for a software engineer who can bring innovative
            ideas and a fresh perspective to your team,
            <br /> I would love to connect with you. Please don't hesitate to
            reach out,
            <br /> and let's explore how we can work together to create amazing
            software solutions.
          </p>
        </div>
      </div>
      < ScrollToTop />
    </div>
  );
}

export default About;
