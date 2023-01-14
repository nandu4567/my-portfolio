import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img className="intro-img" src={IntroImg} alt="IntroImg"/> {/*You Can Change this Img Also*/}
    </div>

    <div className="content">
       <p>HI, I AM NANDKISHOR</p> {/*You Can Edit This */}
      <h1>React Developer</h1>
      <div>
        <Link to="/project" className="btn">
            Projects
        </Link>

        <Link to="/contact" className="btn btn-light">
            Contact
        </Link>

        <div className="info">
          <p className="skills">FRONTEND DEVELOPER</p>
          <p className="skills">CODER</p>
          <p className="skills">FULLSTACK DEVELOPER</p>
        </div>

      </div>
    </div>
  </div>;
};

export default HeroImg; 
