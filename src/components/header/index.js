import './header.css';
import {Link, useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation();

    return (
        <header className="main-header">
            <div className="logo">
                <img src="Group 96.png" alt="My logo"></img>
            </div>
            <div className="nav nav-desktop">
                <ul className="nav-list">
                    <li className={(location.pathname === "/mini-bytes") ? "active" : ""}>
                        <Link to="/mini-bytes"> My Work </Link>
                    </li>
                    <li className={(location.pathname === "/art") ? "active" : ""}>
                        <Link to="/art"> Blogs / Acticles </Link>
                    </li>
                    <li className={(location.pathname === "/contact") ? "active" : ""}>
                        <Link to="/contact"> Contact me </Link>
                    </li>
                </ul>
                <a className="my-btn btn-transparent btn-resume" href='https://drive.google.com/file/d/1SbTbaX9PfHPdRaimZp4CZzFZTeetwU41/view?usp=sharing' target="__blank">
                    Resume
                </a>
            </div>
            <div className="nav nav-mobile">
                <i className="fa fa-hamburger" aria-hidden="true"></i>
            </div>
        </header>
    )
}

export default Header;
