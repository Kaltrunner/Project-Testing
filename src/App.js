import {Routes, Route} from "react-router-dom";
import React, { useEffect } from "react";
import "./index.css";
import Heading from "./Heading";
import Menu from "./Menu";
import Landing from "./Landing";
import MenuHeader from "./Menu-Header";
import About from "./About";
import Projects from "./Projects";
import WorkBody from "./WorkBody";
import Samples from "./Samples";
import Extra from "./Extra";
import Footer from "./Footer";
import Random from "./Random";
import Loading from "./Loading";
// import Clock from "./Clock";

import ScrollButton from './ScrollButton';
// import { Button } from '.Styles';



function App() {

  useEffect(() => {
    const handleLoad = () => {
      if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("<Loading />").style.visibility = "visible";
      } else {
        document.querySelector("<Loading />").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
      }
    };
    
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
  
    <Routes>
      
      <Route path="/" element={<Landing />} />
      <Route path="/Loading" element={<Loading />} />
      <Route path="/Heading" element={<Heading />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/MenuHeader" element={<MenuHeader />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/WorkBody" element={<WorkBody />} />
      <Route path="/Samples" element={<Samples />} />
      <Route path="/Extra" element={<Extra />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Random" element={<Random />} />
      <Route path="/ScrollButton" element={<ScrollButton />} />

      {/* <Route path="/Clock" element={<Clock />} /> */}

    </Routes>
  );
}

export default App;
