import "./NavbarStyles.css";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import { useState } from "react";


const Navbar = () => {

  const [clickHamb, setClickHamb] = useState(false);

  const handleClick = () => setClickHamb(!clickHamb);

  const [color, setColor] = useState(false);

  const changColor = () => {
    if (window.scrollY >= 100) {  //If Scrolled Vertically 
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changColor); // Handling On Scroll Event in above changeColor function and setting the backgroundColor, We are Triggering our changeColor function.

  return <div className={color ? "header header-bg" : "header"}>
    <Link to="/">
    <CgProfile size={30}/>
    <p>NM</p>
    </Link>
    <ul className={clickHamb ? "nav-menu active" : "nav-menu"}>

      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/project">Project</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>

    <div className="hamburger" onClick={handleClick}>
      {clickHamb ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
    </div>
  </div>;
};

export default Navbar; 
