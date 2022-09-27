import "./experience.css";
import "../resume/resume.css";
import { WorkedProjectData } from "../../utility/data/my-projects";
import parse from 'html-react-parser'


const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Experience</h2>
        </div>

        <div className="row timeline">
          <div className="col-lg-6">
            { WorkedProjectData.slice(0, Math.ceil(WorkedProjectData.length/2)).map(project => 
              <div className="timeline-item pb-0" key={project.name}>
                <h4> {project.name} </h4>
                {project.tags.map(tag => 
                  <h5 key={tag}>#{tag} </h5>
                )}
                <p><em> {project.description} </em></p>
                <ul>
                  { project.highlights.map(highlight => 
                    <li key={highlight}> {parse(highlight)} </li>
                  ) }
                </ul>
              </div>
            ) }
          </div>
          <div className="col-lg-6">
            { WorkedProjectData.slice(Math.ceil(WorkedProjectData.length/2)).map(project => 
              <div className="timeline-item pb-0" key={project.name}>
                <h4> {project.name} </h4>
                {project.tags.map(tag => 
                  <h5 key={tag}>#{tag} </h5>
                )}
                <p><em> {project.description} </em></p>
                <ul>
                  { project.highlights.map(highlight => 
                    <li key={highlight}> {parse(highlight)} </li>
                  ) }
                </ul>
              </div>
            ) }
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
