import React, { useState, useEffect } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function SignUp() {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerName, setRegisterName] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [errormsg, setErrorMsg] = useState("");
	const navigate = useNavigate();

	const register = async (e) => {
		e.preventDefault();
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(user);
			if (!errormsg) {
				navigate("/login");
			}
		} 
		catch (error) {
			console.log(error.message);
			setErrorMsg(error.message);
		}
	};

	return (
		<div>
			<div className="signuppage">
				<NavBar />
				<div className="container">
					<div className="row login-box">
						<div className="col-sm-6 images">
							<img
								className="img-2"
								src="https://images.unsplash.com/photo-1517148892120-4d2da39c8dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
								alt=""
							/>
						</div>
						<div className="col-sm-6 login-content">
							<div className="login-title">Welcome New User</div>

							<form className="login-form">
								<div className="login-info">
									<div className="symbol">
										<i className="fa fa-user"></i>
									</div>
									<div className="info">
										<input
											type="text"
											className="input"
											name="name"
											placeholder="Username"
											onChange={(event) => {
												setRegisterName(event.target.value);
											}}
										/>
									</div>
								</div>

								<div className="login-info">
									<div className="symbol">
										<i className="fa fa-user"></i>
									</div>
									<div className="info">
										<input
											type="text"
											className="input"
											name="email"
											placeholder="Email"
											onChange={(event) => {
												setRegisterEmail(event.target.value);
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
												setRegisterPassword(event.target.value);
											}}
										/>
									</div>
								</div>

								<font color="red">{errormsg}</font>
								<div className="login-btn">
									<button onClick={register}>Sign Up</button>
								</div>
								<div className="login-new">
									<Link to="/login">
										Already Registered. Click here to login.
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUp;
