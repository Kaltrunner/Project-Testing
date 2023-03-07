import { Link } from "react-router-dom";


import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  // FadeOut,
  // Move,
  MoveIn,
  MoveOut,
  Sticky,
  // StickyIn,
  // StickyOut,
  // Zoom,
  // ZoomIn,
  // ZoomOut,
} from "react-scroll-motion";

function Projects() {



  const moveinleft = batch(MoveIn(-1500, 0), Sticky(50, 60), MoveOut(0, -900));
  const moveinright = batch(MoveIn(1500, 0), Sticky(50, 60), MoveOut(0, -900));

  return (
    <div className="projects-body-div">
      <div className="menu-header-div-body">
        <Link to="/">
          <button className="menu-header-button">X</button>
        </Link>
      </div>

      <div className="about-body-div" id="project-h1-div">
        <span className="about-span">
          <h1 className="about-h1">Projects</h1>
        </span>

      </div>

      <ScrollContainer className="scroll-container">
        <ScrollPage className="scroll-page" page={0}>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
            <div>
              <h4>Scroll for Projects</h4>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="scroll-page" page={1}>
          <Animator animation={moveinleft}>
            <div id="a-div" >
            <a target="_blank" rel="noreferrer" id="green" href="https://kaltrunner.github.io/agreensquare.github.io/" > <div className="sample-work-example" >
                <img className="project-1" src="the green square gif.gif" alt="green square project website"/>
                </div><p className="project-1-text" >A GREEN SQUARE PROJECT</p></a>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="scroll-page" page={2}>
          <Animator animation={moveinright}>
            <div id="a-div" >
            <a target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner/Rudy" > <div className="sample-work-example" >
                    <img className="project-1"  src="Screenshot 2023-02-21 at 11.54.40 AM.png" alt="" />
                </div><p className="project-1-text" >.Rudy</p></a>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="scroll-page" page={3}>
          <Animator animation={moveinleft} >
            <div id="a-div" >
            <a target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner/Snake-Pit-Game" > <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-02-21 at 12.14.33 PM.png" alt=""/>
                </div><p className="project-1-text" >Snake Pit</p></a>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="scroll-page" page={4}>
          <Animator animation={moveinright} >
            <div id="a-div" >
            <a target="_blank" rel="noreferrer" href="https://github.com/Kaltrunner/design-system-sid.github.io" > <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-03-02 at 12.27.12 PM (2).png" alt=""/>
                </div><p className="project-1-text" >Design System Sid</p></a>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="scroll-page" page={5}>
          <Animator animation={moveinleft} >
            <div id="a-div" >
            <div className="sample-work-example" >
                    <img className="project-1" src="Screenshot 2023-02-21 at 12.11.01 PM.png" alt=""/>
                </div><p className="project-1-text" >Optical Lie</p>
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="scroll-page" page={6}>
          <Animator >
            <div>
            
            </div>
          </Animator>
        </ScrollPage>

        <ScrollPage className="scroll-page" page={7}>
          <Animator animation={batch(FadeIn(), Sticky(), MoveOut())} >
            <div>
              <h4>Thank you!</h4>
            </div>
          </Animator>
        </ScrollPage>

      </ScrollContainer>
    </div>
  );
}

export default Projects;
