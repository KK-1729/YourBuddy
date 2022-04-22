import React from 'react';
import './fullStory.css';
import Button from 'react-bootstrap/Button';
import NavBar from'../../components/Navbar/Navbar';

function FullStory() {
    return(
        <div>
            <NavBar />
            <div className="story">
                <h2>Story Heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa mi, ullamcorper 
                    sit amet ante eu, hendrerit vulputate eros. Aenean scelerisque massa quis diam accumsan
                    cidunt. Aenean venenatis, urna ac ullamcorper consequat, leo elit euismod odio, in 
                    malesuada nisi turpis id purus. Mauris sed tincidunt nisl. Maecenas eget tellus eleifend, 
                    rhoncus nisl sed, aliquet magna. Aliquam felis lectus, suscipit a suscipit in, faucibus 
                    quis mauris. Nam elit nisi, blandit id eleifend eu, pulvinar et sem.
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis massa mi, ullamcorper 
                    sit amet ante eu, hendrerit vulputate eros. Aenean scelerisque massa quis diam accumsan
                    cidunt. Aenean venenatis, urna ac ullamcorper consequat, leo elit euismod odio, in 
                    malesuada nisi turpis id purus. Mauris sed tincidunt nisl. Maecenas eget tellus eleifend, 
                    rhoncus nisl sed, aliquet magna. Aliquam felis lectus, suscipit a suscipit in, faucibus 
                    quis mauris. Nam elit nisi, blandit id eleifend eu, pulvinar et sem.
                </p>
                <br />
                    <Button variant="dark" className="btn col-lg-3">Comment</Button>
                    <Button variant="dark" className="btn col-lg-3">Like</Button>
                    <Button variant="dark" className="btn col-lg-3">Dislike</Button>
            </div>
        </div>
    ); 
}

export default FullStory;