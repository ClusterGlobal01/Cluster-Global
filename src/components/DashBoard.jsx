import React from "react";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import TermsAndConditions from './TermsAndConditions'
import Dishes from "./Dishes";

// import Review from "./Review";
const DashBoard = () => {
  return (
    <div >

        
        <div id="home">
          <Home />
        </div>

        <div id="dishes">
          <Dishes />
        </div>
        
        <div id="about">
          <About />
        </div>
        <div id="TermsAndConditions">
          <TermsAndConditions />
        </div>

        {/* <div id="menu">
          <Menu />
        </div> */}
        {/* <div id="review">
          <Review />
        </div> */}


   
    </div>
  );
};

export default DashBoard;
