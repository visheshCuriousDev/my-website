import "./header.css";
import { HouseHeart, Person, FileText, JournalText, Mailbox, List } from "react-bootstrap-icons";

const Header = () => {

  const openMenuSlider = () => {
    
  }

  return (
    <>
      <i className="mobile-nav-toggle d-xl-none">
        <List size={20} onClick={openMenuSlider}/>
      </i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <HouseHeart title="Home" size={20}></HouseHeart>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <Person title="About" size={20}></Person>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <FileText title="Resume" size={20}></FileText>
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#works" className="nav-link scrollto">
                <JournalText title="Portfolio" size={20}></JournalText>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <Mailbox title="Contact" size={20}></Mailbox>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
