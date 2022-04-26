import React, { useState, useEffect } from "react";
import "./login.css";
import NavBar from "../../components/Navbar/Navbar";

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../../firebase";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [errormsg, setErrorMsg] = useState("");

	const [user, setUser] = useState({});
	const navigate = useNavigate();

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	const login = async (e) => {
		e.preventDefault();

		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			console.log(user);
			if (!errormsg) {
				navigate("/");
			}
		} catch (error) {
			console.log(error.message);
			setErrorMsg(error.message);
		}
	};

	const logout = async () => {
		await signOut(auth);
	};

	return (
		<div>
			<div className="loginpage">
				<NavBar />
				<div className="container">
					<div className="login-box">
						<div className="row">
							<div className="col-sm-6 images">
								<img
									className="img-1"
									src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
									alt=""
								/>
							</div>
							<div className="col-sm-6 login-content">
								<div className="login-title">Member Login</div>
								<form className="login-form">
									<div className="login-info">
										<div className="symbol">
											<i className="fa fa-user"></i>
										</div>
										<div className="info">
											<input
												type="text"
												className="input"
												name="username"
												placeholder="Username"
												onChange={(event) => {
													setLoginEmail(event.target.value);
												}}
											/>
										</div>
									</div>
									<div className="login-info">
										<div className="symbol">
											<i className="fa fa-lock"></i>
										</div>
										<div className="info">
											<input
												type="password"
												className="input"
												name="password"
												placeholder="Password"
												onChange={(event) => {
													setLoginPassword(event.target.value);
												}}
											/>
										</div>
									</div>
									<font color="red">{errormsg}</font>
									<div className="login-btn">
										<button onClick={login}>Sign In</button>
										<button onClick={logout}>Logout</button>
									</div>
									<div className="login-new">
										<Link to="/signup">New Here? Create an account</Link>
									</div>
									Email of user :- {user?.email}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
//     return (
//         <div>
//             <div className="container">
//       <div className="row login-box">
//         <div className="col-sm-6 images">
//           <img className="img-1"
//             src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
//             alt="" />
//         </div>
//         <div className="col-sm-6 login-content">
//           <div className="login-title">Member Login</div>
  
//           <form className="login-form">
//             <div className="login-info">
//               <div className="symbol">
//                 <i className="fa fa-user"></i>
//               </div>
//               <div className="info">
                
//                 <input type="text" className="input" name="username" placeholder="Username" 
//                 onChange={(event)=>{
//                   setLoginEmail(event.target.value);
//                 }}
//                 />

//               </div>
//             </div>
//             <div className="login-info">
//               <div className="symbol">
//                 <i className="fa fa-lock"></i>
//               </div>
//               <div className="info">
//                 <input type="password" className="input" name="password" placeholder="Password"
//                 onChange={(event)=>{
//                   setLoginPassword(event.target.value);
//                 }}
//                 />
//               </div>
//             </div>
//             <font color="red">{errormsg}</font>
//             <div className="login-btn">
//               <button onClick={login}>Sign In</button>
//               {user?<button onClick={logout}>Logout</button>:<></>}
//             </div>
//             <div className="login-new">
//               <Link to="/signup">New Here? Create an account</Link>
//             </div>
//             Email of user :- {user?.email}
//           </form>
//         </div>
//       </div>
//     </div> 
//         </div>
//     );
}

export default Login;
