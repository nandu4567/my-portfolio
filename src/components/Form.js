import "./FormStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import Resume from '../assets/Nandkishor_Metange.pdf';

const Form = () => {
  return <div className="form">
    <form action="https://formspree.io/f/xvoyeeor" method="post">
      <label for="name">Your Name</label>
      <input type="text" name="Name" id="name" />
      <label for="email">Your Email</label>
      <input name="Email" id="email" type="email" />
      <label for="subject" >Subject</label>
      <input type="text" name="Subject" id="subject" />
      <label for="message">Message</label>
      <textarea rows="6" name="Message" placeholder="Type Your Message Here" cols="" id="message"></textarea>
      <input value="send" className="btn" type="submit" />
      <Link to={Resume} download={Resume}><button className="btn btn-primary">Download CV</button></Link>
      <h3 style={{ color: "#fff", textAlign: "center" }}>Refresh While Downloading...</h3>
    </form>
  </div>;
};

export default Form; 
