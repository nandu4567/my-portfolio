import "./WorkCardStyles.css";
import WorkCard2 from "./WorkCard";
import WorkCardData2 from "./WorkCardData2";

const Work2 = (props) => {
  return <div className="work-container">
  <h1 className="project-heading">
    Top Projects
  </h1>
  <div className="project-container">

   {WorkCardData2.map((value,index) => {
      return (
        <WorkCard2 
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

export default Work2; 