import "./header.css";
import {
  HouseHeart,
  Person,
  FileText,
  JournalText,
  Mailbox,
  List,
  XLg
} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import {
  changePageSection,
  getSection,
  isNavbarOpened,
  toggleNavbar,
} from "../../features/slice/headerSlice";
import { pageSections } from "../../utility/constants";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const selectedSection = useSelector(getSection);
  const navbarOpened = useSelector(isNavbarOpened);

  const toggleMenuSlider = () => {
    dispatch(toggleNavbar());
  };

  const navClick = (sectionName: string): undefined => {
    dispatch(changePageSection(sectionName));
    dispatch(toggleNavbar());
    return;
  };

  return (
    <>
      <i className="mobile-nav-toggle d-xl-none" onClick={toggleMenuSlider} >
        {
          navbarOpened ? (
            <XLg size={20}/>
          ) : (
            <List size={20}/>
          )
        }
      </i>
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li onClick={() => navClick(pageSections.hero)}>
              <a
                href="#hero"
                className={`nav-link scrollto ${
                  selectedSection === pageSections.hero ? "active" : ""
                }`}>
                <HouseHeart
                  title="Home"
                  size={20}
                  className="icons"
                ></HouseHeart>
                <span>Home</span>
              </a>
            </li>
            <li onClick={() => navClick(pageSections.about)}>
              <a href="#about"
                className={`nav-link scrollto ${
                  selectedSection === pageSections.about ? "active" : ""
                }`}>
                <Person title="About" size={20} className="icons"></Person>
                <span>About</span>
              </a>
            </li>
            <li onClick={() => navClick(pageSections.resume)}>
              <a href="#resume"
                className={`nav-link scrollto ${
                  selectedSection === pageSections.resume ? "active" : ""
                }`}>
                <FileText title="Resume" size={20} className="icons"></FileText>
                <span>Resume</span>
              </a>
            </li>
            <li onClick={() => navClick(pageSections.portfolio)}>
              <a href="#works"
                className={`nav-link scrollto ${
                  selectedSection === pageSections.portfolio ? "active" : ""
                }`}>
                <JournalText
                  title="Portfolio"
                  size={20}
                  className="icons"
                ></JournalText>
                <span>Portfolio</span>
              </a>
            </li>
            <li onClick={() => navClick(pageSections.contact)}>
              <a href="#contact"
                className={`nav-link scrollto ${
                  selectedSection === pageSections.contact ? "active" : ""
                }`}>
                <Mailbox title="Contact" size={20} className="icons"></Mailbox>
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
