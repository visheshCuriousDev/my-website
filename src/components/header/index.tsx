import "./header.css";
import {
  HouseHeart,
  Person,
  FileText,
  JournalText,
  Mailbox,
  List,
  XLg,
  PcDisplay
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
            <XLg size={24} fill={"#0E243A"}/>
          ) : (
            <List size={24} fill={"#0E243A"}/>
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
            <li onClick={() => navClick(pageSections.experience)}>
              <a href="#experience"
                className={`nav-link scrollto ${
                  selectedSection === pageSections.experience ? "active" : ""
                }`}>
                <PcDisplay
                  title="Experience"
                  size={20}
                  className="icons"
                ></PcDisplay>
                <span>Experience</span>
              </a>
            </li>
            <li onClick={() => navClick(pageSections.works)}>
              <a href="#works"
                className={`nav-link scrollto ${
                  selectedSection === pageSections.works ? "active" : ""
                }`}>
                <JournalText
                  title="Other Works"
                  size={20}
                  className="icons"
                ></JournalText>
                <span>Other Works</span>
              </a>
            </li>
            {/* TODO: enable after secure contact APIis written
            <li onClick={() => navClick(pageSections.contact)}>
              <a href="#contact"
                className={`nav-link scrollto ${
                  selectedSection === pageSections.contact ? "active" : ""
                }`}>
                <Mailbox title="Contact" size={20} className="icons"></Mailbox>
                <span>Contact</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
