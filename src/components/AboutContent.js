import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import react1 from '../assets/react1.jpg';
import react2 from '../assets/react2.webp';

const AboutContent = () => {
  return (<div className="about">
    <div className="left">
      <h1>Who Am I?</h1>
      <p>
      This is Me Nandkishor Metange. I am a Programmer, and I am enough good in Java, JavaScript and Frontend Technologies.
      </p>
      <Link to="/contact">
        <button className="btn">CONTACT</button>
      </Link>
    </div>

    <div className="right">
    <div className="img-container">
      <div className="img-stack top">
        <img className="img" src={react1} alt="react"/>
      </div>

      <div className="img-stack bottom">
        <img className="img" src={react2} alt="react2"/>
      </div>
    </div>
    </div>
  </div>
  );
}

export default AboutContent;
