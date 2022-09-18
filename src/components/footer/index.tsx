import React from "react";
import {
  HouseHeart,
  Person,
  FileText,
  JournalText,
  Mailbox,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Vishesh M</h3>
        <p>
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
          eligendi fuga maxime saepe commodi placeat.
        </p>
        <div className="social-links">
          <a href="#hero" className="nav-link scrollto active">
            <HouseHeart title="Home" size={20}></HouseHeart>
            <span>Home</span>
          </a>
          <a href="#about" className="nav-link scrollto">
            <Person title="About" size={20}></Person>
            <span>About</span>
          </a>
          <a href="#resume" className="nav-link scrollto">
            <FileText title="Resume" size={20}></FileText>
            <span>Resume</span>
          </a>
          <a href="#works" className="nav-link scrollto">
            <JournalText title="Portfolio" size={20}></JournalText>
            <span>Portfolio</span>
          </a>
          <a href="#contact" className="nav-link scrollto">
            <Mailbox title="Contact" size={20}></Mailbox>
            <span>Contact</span>
          </a>
        </div>
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Vishesh M</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
