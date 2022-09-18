/* eslint-disable jsx-a11y/anchor-is-valid */
import "./hero.css";
import Typed from "react-typed";
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
        <p className="name-title">
          <Typed
            strings={["Fullstack Developer", "Wordpress", "AWS DevOps"]}
            typeSpeed={80}
            backSpeed={60}
            loop
          />
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/vishesh-raju-304a99bb/"
            rel="noreferrer"
            target="_blank"
            className="linkedin"
          >
            <Linkedin title="Linkedin profile" />
          </a>
          <a
            href="https://github.com/visheshCuriousDev"
            rel="noreferrer"
            target="_blank"
            className="linkedin">
            <Github title="Github profile" />
          </a>
          <a
            href="https://stackoverflow.com/users/3649118/visheshraju"
            rel="noreferrer"
            target="_blank"
            className="linkedin">
            <StackOverflow title="Stackoverflow profile" />
          </a>
          <a
            href="https://dev.to/vishesh"
            rel="noreferrer"
            target="_blank"
            className="linkedin">
            <CodeSlash title="Dev blog" />
          </a>
          <a
            href="https://www.instagram.com/visheshraju1/"
            rel="noreferrer"
            target="_blank"
            className="linkedin">
            <Instagram title="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
