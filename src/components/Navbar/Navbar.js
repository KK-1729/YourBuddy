import React from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg row">
                <a className="navbar-brand col-lg-6" href="#">
                    {/* <img src="../public/images/nav_logo.png" height="28" alt="Couldn't load picture" className="logo-image" /> */}
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse col-lg-6" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link home-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Stories</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;