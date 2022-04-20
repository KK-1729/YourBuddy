import React from 'react';
import './stories.css';
import NavBar from'../../components/Navbar/Navbar';
import Counsellor from '../../images/counsellor.png';
import Story from '../../components/Story/Story';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Stories() {
    return (
        <div>
            {/* <h1>Stories coming soon!</h1>  */}
            <NavBar /> 
            <div className="row">
                <div className="col-lg-6 jumbo-left">
                    <h1>Start your story!</h1>
                    <Link to="/postform">
                        <Button variant="dark" className="btn">Get Started</Button>
                    </Link>
                </div>
                <div className="col-lg-6 jumbo-right">
                    <img src={Counsellor} className="img-responsive" />
                </div>
            </div>
            <div>
                <h1>Stories</h1>
                <Story />
                <Story />
                <Story />
                <Story />
            </div>
        </div>
    );
}

export default Stories;