import "./FooterStyles.css";
import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} style={
                { color: "#fff", marginRight: "2rem" }} />
              <div>
                <p>548C, Jain Colony, New Vihigaon,</p>
                <p>Buldhana</p>
                <p>Maharashtra - 444303</p>
              </div>
            </div>
            <div className="phone">
              <h3>
                <FaPhone size={20} style={
                  { color: "#fff", marginRight: "2rem"}} />
                IN 986-050-0682
              </h3>
            </div>

            <div className="email">
              <h3>
                <FaMailBulk size={20} style={
                  { color: "#fff", marginRight: "2rem" }} />
                metangenandkishor2805@gmail.com
              </h3>
            </div>
          </div>



          <div className="right">
            <h4>About Me</h4>
            <p>This is Me Nandkishor Metange. I am a programmer and a Front-End developer, Creating Innovative Websites, Playing Chess, Reading Books are some of my hobbies. I enjoy discussing new projects and design challenges. </p>
            <div className="social">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}><FaLinkedin size={25} style={
                  { color: "#fff", marginRight: "1rem" }}/></a>
              <a href="https://www.github.com/nandu4567" target="_blank" rel="noreferrer" style={{cursor: "pointer"}}><FaGithub size={25} style={
                  { color: "#fff", marginRight: "1rem" }}/></a>
            </div>
          </div>

          <div className="right right-most">
            <h4>Strength -</h4>
            <p><i>"First solve the problem. Then, write the code"</i> - John Johnson </p>
            <p><i>"Fix the cause, not the symptom"</i> - Steve Maguire</p>
            <p><i>"Simplicity is the soul of efficiency"</i> - Austin Freeman</p>
          </div>
        </div>
        <div className="footer-bottom">
            <hr/>
            <div className="container grid grid-two-column">
              <p>
                @{new Date().getFullYear()} Nandkishor. All Rights Reserved
              </p>
              <div>
                <p>PRIVACY POLICY</p>
                <p>TERMS & CONDITIONS</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer; 
