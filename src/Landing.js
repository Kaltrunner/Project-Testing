import Heading from "./Heading";
import WorkBody from "./WorkBody";
// import Samples from "./Samples";
import Extra from "./Extra";
import Footer from "./Footer";
// import Random from "./Random";
import ScrollButton from './ScrollButton';
import LandingClock from "./Landing-Clock";
import Menu from "./Menu";


function Landing() {

  return (
    <div className="landing-div-body">


      <Heading />
      <div className="landing-text-div" id="under-line-div">
      <LandingClock />
        <h1 className="title" id="under-line">
          Erik Russell
        </h1>

        <div className="else-link" >
        <img className="bio-pic" src="image1.jpeg" alt=""></img>
          <p className="undertext">Software Engineer</p>
        </div>
      </div>
      <WorkBody />
      {/* <Random /> */}
      {/* <Samples /> */}
      <Menu />
      <Extra />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default Landing;
