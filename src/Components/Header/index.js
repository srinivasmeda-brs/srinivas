import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import logo from "../../assets/images/Nyros-Technologies-logo-profile.jpg";

import "./index.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const logOut = () => {
        Cookies.remove("sessionToken");
        navigate('/login');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header-container">
            <Link to="/" className="logo-link">
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/ecommerce"><li>Ecommerce</li></Link>
                <Link to="/rocket"><li>Rocket</li></Link>
                <Link to="/issues-tracker"><li>IssuesTracker</li></Link>
                <Link to="/meditation"><li>Meditation</li></Link>
                <Link to="/rock-paper-scissors"><li>RockPaperScissors</li></Link>
                <Link to="/simple-clock"><li>SimpleClock</li></Link>
                <Link to="/tic-tac-toe"><li>TicTacToe</li></Link>
                <button onClick={logOut} className="logout-button">LogOut</button>
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </header>
    );
};

export default Header;
