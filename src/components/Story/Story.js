import React from "react";
import "./Story.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Story() {
	return (
		<div>
			<div className="story">
				<h2>Story Heading</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa
					mi, ullamcorper sit amet ante eu, hendrerit vulputate eros. Aenean
					scelerisque massa quis diam accumsan cidunt. Aenean venenatis, urna ac
					ullamcorper consequat, leo elit euismod odio, in malesuada nisi turpis
					id purus. Mauris sed tincidunt nisl. Maecenas eget tellus eleifend,
					rhoncus nisl sed, aliquet magna. Aliquam felis lectus, suscipit a
					suscipit in, faucibus quis mauris. Nam elit nisi, blandit id eleifend
					eu, pulvinar et sem.
				</p>
				<br />
				<Link to="/fullstory">
					<Button variant="dark" className="btn">
						View More
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default Story;
