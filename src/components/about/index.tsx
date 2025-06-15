import "./about.css"
import {
  Globe2,
  GeoAltFill,
  PersonFill,
  EnvelopeFill,
  MortarboardFill,
  BalloonFill
} from "react-bootstrap-icons";

const About = () => {

  const getAge = () => {
    var ageDifMs = Date.now() - new Date("1995-10-10").getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <>
      {/* <!-- ======= About Section ======= --> */}
      <div className="about container" data-aos="fade-up">
        <div className="row">
          {/* <div className="col-lg-4 my-profile-img">
            <img
              src="/img/my_profile.JPG"
              className="img-fluid"
              alt=""
            />
          </div> */}
          <div className="pt-4 pt-lg-0 content">
            <p className="intro-desc">
              Building web applications with API servers (microservices), user interface, cloud deployment and CI / CD.
              I have advanced proficiency in <span className="green-highlight">Java(SpringBoot), RectJS, HTML, CSS, Angular2-8,
              Typescript, NodeJS, ES6</span>. I also have a solid foundation in cloud
              application like <span className="green-highlight">Terraform, GCP, AWS, Firebase</span>.
              <br/><br/>
              AI Tools:
              <span className="green-highlight">
                <a className="ai-tool-link" href="https://www.cursor.com/" target="__blank">Cursor</a>, 
              </span>
              <span className="green-highlight">
                <a className="ai-tool-link" href="https://cline.bot/" target="__blank">Cline</a>, 
              </span>
              <span className="green-highlight">
                <a className="ai-tool-link" href="https://copilot.microsoft.com/" target="__blank">CoPilot</a>, 
              </span>
              <span className="green-highlight">
                <a className="ai-tool-link" href="https://openai.com/index/chatgpt/" target="__blank">ChatGPT</a>, 
              </span>
              <span className="green-highlight">
                <a className="ai-tool-link" href="https://www.perplexity.ai/" target="__blank">Perplexity</a>, 
              </span>
              <span className="green-highlight">
                <a className="ai-tool-link" href="https://ollama.com/" target="__blank">Ollama (For locally hosted LLM models and training)</a>, 
              </span>
              <span className="green-highlight">
                <a className="ai-tool-link" href="https://streamlit.io/" target="__blank">StreamLit</a>
              </span>
            </p>
            <p>
              
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul className="about-list">
                  <li>
                    <BalloonFill size={22} />
                    <span>10 Oct 1995</span>
                  </li>
                  <li>
                    <Globe2 size={22} />
                    <span>
                      <a href="https://visheshdev.in/" target="__blank">https://visheshdev.in/</a>
                    </span>
                  </li>
                  <li>
                    <GeoAltFill size={22} />
                    <span>Chennai, India</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="about-list">
                  <li>
                    <PersonFill size={22} />
                    <span>{getAge()}</span>
                  </li>
                  <li>
                    <MortarboardFill size={22} />
                    <span>Bachelor Degree</span>
                  </li>
                  <li>
                    <EnvelopeFill size={22} />
                    <span>
                      <a href="mailto:visheshvvvm@gmail.com" target="__blank">visheshvvvm@gmail.com</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End About Section --> */}
    </>
  );
};

export default About;
