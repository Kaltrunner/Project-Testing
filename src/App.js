import { Routes, Route } from "react-router-dom";
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
import ScrollButton from "./ScrollButton";

function App() {
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
    </Routes>
  );
}

export default App;
