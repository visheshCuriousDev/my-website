import './header.css';
import {Link, useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation();

    return (
        <header className="main-header">
            <div className="logo">
                <img src="Group 96.png" alt="My logo"></img>
            </div>
            <div className="nav">
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
                <button className="my-btn btn-transparent btn-resume">
                    Resume <i className="fa fa-file-pdf-o" aria-hidden="true"></i>
                </button>
            </div>
        </header>
    )
}

export default Header;
