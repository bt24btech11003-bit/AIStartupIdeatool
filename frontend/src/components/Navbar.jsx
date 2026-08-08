import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "../styles/Navbar.css";

import { AuthContext } from "../context/AuthContext";

import "../styles/Navbar.css";

function Navbar() {

    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <nav className="navbar">

            <h2 className="logo">
                AI Startup Validator
            </h2>

            <div className="nav-links">

                <Link to="/">
                    Dashboard
                </Link>

                <Link to="/history">
                    History
                </Link>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;