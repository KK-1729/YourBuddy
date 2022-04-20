import React from 'react';
import './landing.css';
import NavBar from'../../components/Navbar/Navbar';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import About from '../../components/About/About';

function Landing() {
    return (
        <div>
            {/* <h1 className="title">Landing coming soon!</h1>  */}
            <NavBar />
            <Jumbotron />
            <About />
        </div>
    );
}

export default Landing;