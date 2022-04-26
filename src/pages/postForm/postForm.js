import React, {useState, useEffect} from 'react';
import './postForm.css';
import Button from 'react-bootstrap/Button';
import NavBar from '../../components/Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


//FireBase
import {db} from '../../firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../../firebase'; 




function PostForm() {

    const navigate = useNavigate();
    
    const [user,setUser]=useState({});
    const [heading, setHeading]= useState("");
    const [content, setContent]= useState("");
    const [comments, setComments]= useState({});

    const postsCollectionRef=collection(db,"posts");


    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
      });
    
    if(!user)
      {
          navigate('/login')
      }


    const addPost = async () =>{
        await addDoc(postsCollectionRef,{heading:heading, content:content,author:user.email,comments:comments})
    }


    return (
        <div>
            <NavBar />
            <div className="post-form">
                <h1>Start your story</h1>
                <form>
                    <label htmlfor="story-title" className="form-label">Title</label>
                    
                    <input type="text" 
                    onChange={(event)=>{
                        setHeading(event.target.value);
                    }}
                    name="story-title" />

                    <br />
                    <label htmlfor="story-description" className="form-label">Description</label>
                    <textarea name="story-description" rows="10" cols="50" 
                    onChange={(event)=>{
                        setContent(event.target.value);
                    }}
                    />
                    <br />
                    <Button variant="dark" className="btn" onClick={addPost}>Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default PostForm;