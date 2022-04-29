import React, { useState, useEffect } from "react";
import "./stories.css";
import "../fullStory/fullStory.css";
import NavBar from "../../components/Navbar/Navbar";
import Counsellor from "../../images/counsellor.png";
import Story from "../../components/Story/Story";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { db } from "../../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
// <<<<<<< backend2
// import {auth} from '../../firebase';

// const Stories=()=> {

//     const [posts,setPosts] = useState([]);
//     const postsCollectionRef = collection(db, "posts");

//     const [user,setUser]=useState({});
//     //Comment
//     const [printpostcomment,setPrintPostComment]=useState("");
//     const [postcomment,setPostComment]=useState("");
//     const [postheading,setPostHeading]=useState("");

//     const [comments,setComments] = useState([]);
//     const commentsCollectionRef = collection(db, "comments");

//     onAuthStateChanged(auth, (currentUser)=>{
//         setUser(currentUser);
//     });

//     useEffect(()=>{
//         const getPosts = async () => {
//             const data = await getDocs(postsCollectionRef);//TO get all documents in a collection
//             setPosts(data.docs.map((doc)=>({key: doc.id, ...doc.data()})));
//         };
//         getPosts();
//     },[])

//     useEffect(()=>{
//         const getComments = async () => {
//             const data = await getDocs(commentsCollectionRef);//TO get all documents in a collection
//             setComments(data.docs.map((doc)=>({key: doc.id, ...doc.data()})));
//         };
//         getComments();
//     },[posts])

//     const updateComment = () =>{
//         setPrintPostComment(postcomment);
//         alert('Warning : This might be a hate comment. Action might be taken');
//     }

//     return (
//         <div>
//             {/* <h1>Stories coming soon!</h1>  */}
//             <NavBar />
//             <div className="row">
//                 <div className="col-lg-6 jumbo-left">
//                     <h1>Start your story!</h1>
//                     <Link to="/postform">
//                         <Button variant="dark" className="btn">Get Started</Button>
//                     </Link>
//                 </div>
//                 <div className="col-lg-6 jumbo-right">
//                     <img src={Counsellor} className="img-responsive" />
//                 </div>
//             </div>
//             <div>
//                 <h1>Stories</h1>

//                 {posts.map((post)=>{
//                 const hell="hell";
//                 return(
//                     <div key={post.key}>
//                     <div className="story">
//                         <h2>{post.heading}</h2>
//                         <p>{post.content}</p>

//                         <br />

//                         <input type="text"
//                             onChange={(event)=>{
//                             setPostComment(event.target.value);
//                             setPostHeading(post.heading)
//                             }}
//                         />
//                     <br></br><br></br>
//                     <button onClick={()=>{updateComment()}}>Post</button>

//                     <br></br>
//                     <Button variant="dark" className="btn col-lg-3">Comment</Button>
//                     <Button variant="dark" className="btn col-lg-3">Like</Button>
//                     <Button variant="dark" className="btn col-lg-3">Dislike</Button>

//                 <br></br><br></br><br></br><br></br>
//                 <h2>Comments</h2>
//                 <div className='comment'>
//                 <p>
//                     <span>Your Comment : </span>
//                     <span>{printpostcomment}</span>
//                 </p>
//                 {post.comments?(
//                     Object.keys((post.comments)).map((key, i) => (
//                     <p key={i}>
//                     <span>{key} : </span>
//                     <span>{(post.comments)[key]}</span>
//                     </p>
//                     )
//                 )

//                 ):<>No Comments have been posted yet !</>
//                 }

//                 </div>

//                     </div>
//                 </div>
//                 );
//                 })}
//             </div>
//         </div>
//     );
// }

// export default Stories;
// =======
import { auth } from "../../firebase";

const Stories = () => {
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = collection(db, "posts");

	const [user, setUser] = useState({});
	const [printpostcomment, setPrintPostComment] = useState("");
	const [postcomment, setPostComment] = useState("");
	const [postheading, setPostHeading] = useState("");

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

	const updateComment = () => {
		if (
			postcomment == "idiotic" ||
			postcomment == "You are dumb" ||
			postcomment == "Bad" ||
			postcomment == "You are pathetic"
		) {
			alert("Warning : This might be a hate comment. Action might be taken");
		} else {
			setPrintPostComment(postcomment);
		}
	};

	return (
		<div>
			<NavBar />
			<div className="story-jumbo">
				<div className="row">
					<div className="col-lg-6 jumbo-left">
						<h1>Share your Story!</h1>
						<h1>Be part of the change.</h1>
						<Link to="/postform">
							<Button variant="dark" className="btn">
								Post Story
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
								<h2 className="storyhead">{post.heading}</h2>
								<p>{post.content}</p>

								{user ? (
									<div className="yourcomment">
										<input
											type="text"
											placeholder="Share your thoughts on the post..."
											onChange={(event) => {
												setPostComment(event.target.value);
												setPostHeading(post.heading);
											}}
										/>
										<button
											onClick={() => {
												updateComment();
											}}
										>
											Post
										</button>
									</div>
								) : (
									<></>
								)}

								<Button variant="dark" className="btn col-lg-3">
									Comment
								</Button>
								<Button variant="dark" className="btn col-lg-3">
									Like
								</Button>
								<Button variant="dark" className="btn col-lg-3">
									Dislike
								</Button>

								<h2 className="storycomment">Comments</h2>
								<div className="comment">
									<div className="container">
										<p>
											<span className="commenthead">Me : </span>
											<span className="commentcontent">{printpostcomment}</span>
										</p>
									</div>
									{post.comments ? (
										Object.keys(post.comments).map((key, i) => (
											<div className="container">
												<p key={i}>
													<span className="commenthead">{key} : </span>
													<span className="commentcontent">
														{post.comments[key]}
													</span>
												</p>
											</div>
										))
									) : (
										<>No Comments have been posted yet !</>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Stories;
// >>>>>>> master
