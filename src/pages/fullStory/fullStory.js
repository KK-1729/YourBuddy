import React, {useState, useEffect} from 'react';
import './fullStory.css';
import Button from 'react-bootstrap/Button';
import NavBar from'../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';


//FireBase
import {db} from '../../firebase';
import { collection, getDocs } from "firebase/firestore"; 
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase';



const FullStory=({location}) => {
    const { hell = "defaultValue" } = location.state || {}
    console.log({hell});

     




    const [user,setUser]=useState({});
    const [postcomment,setPostComment]=useState("as");
    const [comments,setComments] = useState([]);
    const commentsCollectionRef = collection(db, "comments");

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    });

    useEffect(()=>{
        const getComments = async () => {
            const data = await getDocs(commentsCollectionRef);//TO get all documents in a collection
            setComments(data.docs.map((doc)=>({key: doc.id, ...doc.data()})));
        };
        getComments();
    },[])


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
                <input type="text" 
                    onChange={(event)=>{
                    setPostComment(event.target.value);
                    }}
                />
                <br></br><br></br>
                <button>Post</button>
                
                
                <br></br>
                    <Button variant="dark" className="btn col-lg-3">Comment</Button>
                    <Button variant="dark" className="btn col-lg-3">Like</Button>
                    <Button variant="dark" className="btn col-lg-3">Dislike</Button>


                <br></br><br></br><br></br><br></br>
                <h2>Comments</h2>
                <div className='comment'>


                    {comments.map((comment)=>{

                        return(
                        <div key={comment.key}>
                            {comment.name} : {comment.comment}
                        </div>
                        );
                        
                    })}

                </div>

                {user?.email}

            </div>


            
        </div>
    ); 
}

export default FullStory;