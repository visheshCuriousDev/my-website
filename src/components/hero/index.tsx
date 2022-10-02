import "./hero.css";
import Typed from "typewriter-effect";
import {
  Github,
  Linkedin,
  Instagram,
  StackOverflow,
  CodeSlash,
} from "react-bootstrap-icons";

const Hero = () => {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Vishesh M</h1>
        <div className="name-title">
          <Typed
            options={
              {
                strings: ["Fullstack Developer", "Wordpress", "AWS DevOps"],
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
    </section>
  );
};

export default Hero;
