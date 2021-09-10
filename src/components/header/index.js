import './header.css';

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                Vishesh@dev
            </div>
            <div className="nav">
                <ul className="nav-list">
                    <li className="active"> Mini bytes </li>
                    <li> Projects </li>
                    <li> Resume </li>
                    <li> Contact me </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;