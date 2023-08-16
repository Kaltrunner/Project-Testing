// import Heading from "./Heading";
// import WorkBody from "./WorkBody";
// import Samples from "./Samples";
import Extra from "./Extra";
import Footer from "./Footer";
// import Random from "./Random";
import Card from "./Card";
import ScrollButton from "./ScrollButton";
import LandingClock from "./Landing-Clock";
import Menu from "./Menu";
import { ScrollToTop } from "react-router-scroll-to-top";

function Landing() {
  return (
    <div className="landing-div-body">
      {/* <Heading /> */}
      <div className="landing-text-div" id="under-line-div">
        <LandingClock />
        <h1 contentEditable className="title" id="under-line">
          Erik Russell
        </h1>

        <div className="else-link">
          <img className="bio-pic" src="image1.jpeg" alt=""></img>
          <p className="undertext">
            <a className="hidden-a" href="/">
              Software Engineer
              <span className="hidden-span">
                <img
                  className="hidden-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
                  alt=""
                  width="250"
                />
              </span>
            </a>
          </p>
        </div>
      </div>
      <Card />
      {/* <WorkBody /> */}
      {/* <Random /> */}
      {/* <Samples /> */}
      <Menu />
      <Extra />
      <Footer />
      <ScrollButton />
      <ScrollToTop />
    </div>
  );
}

export default Landing;
