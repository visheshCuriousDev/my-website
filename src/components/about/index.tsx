import "./about.css"
import {
  Globe2,
  GeoAltFill,
  PersonFill,
  FileCheckFill,
  EnvelopeFill
} from "react-bootstrap-icons";
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {

  const getAge = () => {
    var ageDifMs = Date.now() - new Date("1995-10-10").getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <>
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p>Never give up !! Make a bold statement !!</p>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <img
                src="assets/img/profile-img.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>Full stack Web Developer.</h3>
              <p className="fst-italic">
                I can build web applications with API servers, user interface, cloud deployment, CI/CD.
                I have advanced proficiency in <span className="green-highlight">RectJS, HTML, CSS, Angular2-8,
                Typescript, NodeJS, ES6</span>. I also have a solid foundation in cloud
                application like <span className="green-highlight">AWS cloudfront, AWS S3, Firebase, etc</span>.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="about-list">
                    <li>
                      <img src="/icons/birthday-cake.png" alt="" />
                      <span>10 Oct 1995</span>
                    </li>
                    <li>
                      <Globe2 size={22} />
                      <span>https://visheshdev.in/</span>
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
                      <FileCheckFill size={22} />
                      <span>Bachelor Degree</span>
                    </li>
                    <li>
                      <EnvelopeFill size={22} />
                      <span>contact@visheshdev.in</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Skills Section ======= --> */}
      <section id="skills" className="skills section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Skills</h2>
            <p>
              Skills earned over <span className="green-highlight">5+ years</span> of experience building various applications
            </p>
          </div>

          <div className="row skills-content">
            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  ReactJs <i className="val">100%</i>
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
                  Typescript <i className="val">90%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={90} />
              </div>

              <div className="progress">
                <span className="skill">
                  HTML &amp; CSS <i className="val">90%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={90} />
              </div>

              <div className="progress">
                <span className="skill">
                  WordPress/CMS <i className="val">50%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={50} />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="progress">
                <span className="skill">
                  NodeJS <i className="val">100%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={100} />
              </div>

              <div className="progress">
                <span className="skill">
                  MySQL <i className="val">90%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={90} />
              </div>

              <div className="progress">
                <span className="skill">
                  NoSQL <i className="val">60%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={60} />
              </div>

              <div className="progress">
                <span className="skill">
                  DevOps (AWS / CI / CD / Firebase) <i className="val">75%</i>
                </span>
                <ProgressBar min={0} max={100} variant={'info'} animated={true} now={75} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Skills Section --> */}
    </>
  );
};

export default About;
