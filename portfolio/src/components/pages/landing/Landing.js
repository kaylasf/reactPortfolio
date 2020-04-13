import React from "react";

import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Project from "../projects/Projects";
import NavTabs from "../nav/NavTabs";

import Footer from "../../footer/footer.js";


function Landing() {
  return (

    <div>
     <NavTabs ></NavTabs>
          <Home></Home>
          <About></About>
          <Project></Project>
          <Contact></Contact>
          <Footer></Footer>
    </div>
  );
}

export default Landing;
