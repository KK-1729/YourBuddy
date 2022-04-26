import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/nav_logo.png";

function NavBar() {
	return (
		<div>
			<div className="navpage">
				<nav className="navbar navbar-expand-lg row">
					<div className="col-lg-6"></div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse col-lg-6" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to="/" className="nav-link">
									Home <span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/home" className="nav-link">
									Stories
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/login" className="nav-link">
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/signup" className="nav-link">
									Sign Up
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default NavBar;
