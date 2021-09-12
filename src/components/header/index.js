import './header.css';
import {Link, useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation();

    return (
        <header className="main-header">
            <div className="logo">
                Vishesh@dev
            </div>
            <div className="nav">
                <ul className="nav-list">
                    <li className={(location.pathname === "/") ? "active" : ""}>
                        <Link to="/"> Mini bytes </Link>
                    </li>
                    <li className={(location.pathname === "/projects") ? "active" : ""}>
                        <Link to="/projects"> Projects </Link>
                    </li>
                    <li className={(location.pathname === "/art") ? "active" : ""}>
                        <Link to="/art"> Blogs / Acticles </Link>
                    </li>
                    <li className={(location.pathname === "/resume") ? "active" : ""}>
                        <Link to="/resume"> Resume </Link>
                    </li>
                    <li className={(location.pathname === "/contact") ? "active" : ""}>
                        <Link to="/contact"> Contact me </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
