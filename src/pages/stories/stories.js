import React, { useState, useEffect } from "react";
import "./stories.css";
import "../fullStory/fullStory.css";

import NavBar from "../../components/Navbar/Navbar";
import Counsellor from "../../images/counsellor.png";
import Story from "../../components/Story/Story";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

//FireBase
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Stories = () => {
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, "posts");

	const [user, setUser] = useState({});
	const [postcomment, setPostComment] = useState("as");
	const [comments, setComments] = useState([]);
	const commentsCollectionRef = collection(db, "comments");

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	});

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef); //TO get all documents in a collection
			setPosts(data.docs.map((doc) => ({ key: doc.id, ...doc.data() })));
		};
		getPosts();
	}, []);

	useEffect(() => {
		const getComments = async () => {
			const data = await getDocs(commentsCollectionRef); //TO get all documents in a collection
			setComments(data.docs.map((doc) => ({ key: doc.id, ...doc.data() })));
		};
		getComments();
	}, [posts]);

	return (
		<div>
			<NavBar />
			<div className="story-jumbo">
				<div className="row">
					<div className="col-lg-6 jumbo-left">
						<h1>Start your story!</h1>
						<Link to="/postform">
							<Button variant="dark" className="btn">
								Get Started
							</Button>
						</Link>
					</div>
					<div className="col-lg-6 jumbo-right">
						<img src={Counsellor} className="img-responsive" />
					</div>
				</div>
			</div>

			<div className="storydiv">
				<h1>-Stories-</h1>

				{posts.map((post) => {
					const hell = "hell";
					return (
						<div key={post.key}>
							<div className="story">
								<h2>{post.heading}</h2>
								<p>{post.content}</p>

								<input
									type="text"
									onChange={(event) => {
										setPostComment(event.target.value);
									}}
								/>
								<button>Post</button>

								<Button variant="dark" className="btn col-lg-3">
									Comment
								</Button>
								<Button variant="dark" className="btn col-lg-3">
									Like
								</Button>
								<Button variant="dark" className="btn col-lg-3">
									Dislike
								</Button>

								<h2>Comments</h2>
								<div className="comment"></div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Stories;
