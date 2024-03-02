import "./hero.css";
import Typed from "typewriter-effect";
import {
  Github,
  Linkedin,
  Instagram,
  StackOverflow,
  CodeSlash,
} from "react-bootstrap-icons";
import About from "../about";

const Hero = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <div className="row">
          <div className="hero-left col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <h1>Vishesh M</h1> <span className="designation">FullStack Developer</span>
            <div className="name-title">
              <Typed
                options={
                  {
                    strings: ["Java", "Terraform", "Javascript", "React", "NodeJS", "AWS & GCP DevOps", "Typescript"],
                    delay: "natural",
                    deleteSpeed: "natural",
                    loop: true,
                    autoStart: true
                  }
                }
              />
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/vishesh-m-304a99bb"
                rel="noreferrer"
                target="_blank"
                className="linkedin"
              >
                <Linkedin title="Linkedin profile" className="icons" />
              </a>
              <a
                href="https://github.com/visheshCuriousDev"
                rel="noreferrer"
                target="_blank"
                className="linkedin">
                <Github title="Github profile" className="icons" />
              </a>
              <a
                href="https://stackoverflow.com/users/3649118/visheshraju"
                rel="noreferrer"
                target="_blank"
                className="linkedin">
                <StackOverflow title="Stackoverflow profile" className="icons" />
              </a>
              <a
                href="https://dev.to/vishesh"
                rel="noreferrer"
                target="_blank"
                className="linkedin">
                <CodeSlash title="Dev blog" className="icons" />
              </a>
              <a
                href="https://www.instagram.com/visheshraju1/"
                rel="noreferrer"
                target="_blank"
                className="linkedin">
                <Instagram title="Instagram" className="icons" />
              </a>
            </div>
          </div>
          <div className="hero-right col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <About />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
