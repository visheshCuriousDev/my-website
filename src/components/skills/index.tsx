import "./skills.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { DateTime } from "luxon";

const Skill = () => {

  const getWorkExpYears = () => {
    let years = DateTime.now().diff(DateTime.fromISO('2017-03-13'), "years").toObject().years
    return years ? parseInt(years.toString()): "";
  }

  return (
    <>
      {/* <!-- ======= Skills Section ======= --> */}
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Skills earned over <span className="green-highlight">{getWorkExpYears()}+ years</span> of experience building various applications
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  NodeJS <i className="val">100%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={100} />
              </div>

              <div className="progress">
                <span className="skill">
                  Javascript <i className="val">100%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={100} />
              </div>

              <div className="progress">
                <span className="skill">
                  ReactJs <i className="val">90%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={90} />
              </div>

              <div className="progress">
                <span className="skill">
                  Typescript <i className="val">90%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={90} />
              </div>

              <div className="progress">
                <span className="skill">
                  HTML &amp; CSS <i className="val">80%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={90} />
              </div>
            </div>

            <div className="col-lg-6">

              <div className="progress">
                <span className="skill">
                  MySQL <i className="val">80%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={90} />
              </div>

              <div className="progress">
                <span className="skill">
                  NoSQL <i className="val">60%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={70} />
              </div>

              <div className="progress">
                <span className="skill">
                  DevOps (AWS / CI / CD / Firebase) <i className="val">75%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={75} />
              </div>

              <div className="progress">
                <span className="skill">
                  WordPress/CMS <i className="val">50%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={50} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Skills Section --> */}
    </>
  );
};

export default Skill;
