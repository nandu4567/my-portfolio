import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return <div className="project-card">
  <img src={props.imgsrc} alt="img"/>
  <h2 className="project-title">{props.title}</h2>
  <div className="details">
    <p>{props.description}</p>
    <div className="work-btn">
                {/*Buttons*/}
    <NavLink to={props.view} className="btn" target={'_blank'}>
      View
    </NavLink>

    <NavLink to={props.src} className="btn" target={'_blank'}>
      Source
    </NavLink>

    </div>
  </div>
  </div>
};

export default WorkCard; 
