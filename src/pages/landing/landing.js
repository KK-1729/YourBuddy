import React from 'react';
import './landing.css';
import NavBar from'../../components/Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

function Landing() {
    return (
        <div>
            {/* <h1 className="title">Landing coming soon!</h1>  */}
            <NavBar />
            <Jumbotron />
        </div>
    );
}

export default Landing;