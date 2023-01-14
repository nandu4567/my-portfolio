import "./SkillCardStyles.css";

const SkillCard = () => {

  // Instesd of Pricing Show Skills Section here and Customize by your preference
  return <div className="pricing">
      <h1 className="project-heading">
        Skills
      </h1>
    <div className="card-container">
      <div className="card">
        <h3>Technologies</h3>
        <span className="bar"></span>
        <p>Java, JavaScript</p>
        <p>HTML5, CSS, Bootstrap</p>
        <p>React</p>
      </div>

      <div className="card">
        <h3>Databases</h3>
        <span className="bar"></span>
        <p>MySQL</p>
        <p>MongoDB</p>
      </div>

      <div className="card">
        <h3>Tools</h3>
        <span className="bar"></span>
        <p>VS Code</p>
        <p>GitHub</p>
        <p>Postman</p>
      </div>
    </div>
  </div>;
};

export default SkillCard; 
