import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "../../images/nav_logo.png";
import { onAuthStateChanged,signOut } from "firebase/auth";
import {auth} from '../../firebase'; 


function NavBar() {
  const [user,setUser]=useState({});

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    });


    const logout = async () => {
        await signOut(auth);
    }

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


    



  
//                         {!user?<>
//                         <li className="nav-item">
//                             <Link to="/login" className="nav-link">Login</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/signup" className="nav-link">Sign Up</Link>
//                         </li>
//                         </>:<></>}

//                         <li className="nav-item">
//                             <Link to="/postform" className="nav-link">Post</Link>
//                         </li>

//                         {user?<>
//                         <li className="nav-item">
//                             <button onClick={logout} className="nav-link">Logout</button>
//                         </li>
//                         </>:<></>}

}

export default NavBar;
