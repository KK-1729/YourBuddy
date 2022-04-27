import React, { useState, useEffect } from "react";
import "./postForm.css";
import Button from "react-bootstrap/Button";
import NavBar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//FireBase
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

function PostForm() {
	const navigate = useNavigate();

	const [user, setUser] = useState({});
	const [heading, setHeading] = useState("");
	const [content, setContent] = useState("");
	const [comments, setComments] = useState({});

	const postsCollectionRef = collection(db, "posts");

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	if (!user) {
		navigate("/login");
	}

	const addPost = async () => {
		await addDoc(postsCollectionRef, {
			heading: heading,
			content: content,
			author: user.email,
			comments: comments,
		});
	};

	return (
		<div>
			<div className="formpage">
				<NavBar />
				<div className="post-form">
					<h1>Share your story</h1>
					<form>
						<div className="row">
							<div className="col-lg-3">
								<label htmlfor="story-title" className="form-label">
									Title
								</label>
							</div>
							<div className="col-lg-9">
								<input
									type="text"
									className="forminput"
									onChange={(event) => {
										setHeading(event.target.value);
									}}
									name="story-title"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3">
								<label htmlfor="story-description" className="form-label">
									Description
								</label>
							</div>
							<div className="col-lg-9">
								<textarea
									name="story-description"
									rows="10"
									cols="50"
									className="forminput"
									onChange={(event) => {
										setContent(event.target.value);
									}}
								/>
							</div>
						</div>
						<Button variant="dark" className="btn" onClick={addPost}>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default PostForm;
