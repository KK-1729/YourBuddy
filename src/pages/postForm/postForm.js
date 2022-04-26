import React from "react";
import "./postForm.css";
import Button from "react-bootstrap/Button";
import NavBar from "../../components/Navbar/Navbar";

function PostForm() {
	return (
		<div>
			<NavBar />
			<div className="post-form">
				<h1>Start your story</h1>
				<form>
					<label for="story-title" className="form-label">
						Title
					</label>
					<input type="text" name="story-title" />
					<br />
					<label for="story-description" className="form-label">
						Description
					</label>
					<textarea name="story-description" rows="10" cols="50" />
					<br />
					<Button variant="dark" className="btn">
						Submit
					</Button>
				</form>
			</div>
		</div>
	);
}

export default PostForm;
