import './header.css';
import {BrowserRouter as Router, Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                Vishesh@dev
            </div>
            <div className="nav">
                <ul className="nav-list">
                    <li className="active">
                        <Link to="/"> Mini bytes </Link>
                    </li>
                    <li>
                        <Link to="/projects"> Projects </Link>
                    </li>
                    <li>
                        <Link to="/art"> Blogs / Acticles </Link>
                    </li>
                    <li>
                        <Link to="/resume"> Resume </Link>
                    </li>
                    <li>
                        <Link to="/contact"> Contact me </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
