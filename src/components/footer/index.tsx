import "./footer.css";
import {
  HouseHeart,
  Person,
  FileText,
  JournalText,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Vishesh M</h3>
        <div className="social-links">
          <a href="#hero" className="nav-link scrollto active">
            <HouseHeart title="Home" size={20}></HouseHeart>
          </a>
          <a href="#about" className="nav-link scrollto">
            <Person title="About" size={20}></Person>
          </a>
          <a href="#resume" className="nav-link scrollto">
            <FileText title="Resume" size={20}></FileText>
          </a>
          <a href="#works" className="nav-link scrollto">
            <JournalText title="Portfolio" size={20}></JournalText>
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
