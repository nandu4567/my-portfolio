import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from './WorkCardData';

const Work = (props) => {
  return <div className="work-container">
  <h1 className="project-heading">
    All Projects
  </h1>
  <div className="project-container">

   {WorkCardData.map((value,index) => {
      return (
        <WorkCard 
        key={index}
        imgsrc={value.imgsrc}
        title={value.title}
        description={value.description}
        view={value.view}
        src={value.src}
        />
      )
   })}

  </div>
  </div>
};

export default Work; 

