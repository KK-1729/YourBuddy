import React from 'react';
import Button from 'react-bootstrap/Button';
import './Jumbotron.css';
import Counsellor from '../../images/counsellor.png';
import { Link } from 'react-router-dom';

function Jumbo() {
    return (
        // <div>
        //     <div className="jumbotron">
        //         <div className="jumb-content">
        //             <h1 className="display-4">Want to know what's <br />happening?</h1>
        //             <p className="lead">
        //                 <a className="btn btn-lg" href="news.php" role="button">Let's Go <i className="fas fa-arrow-right"></i></a>
        //             </p>
        //         </div>
        //         <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4acb4930711751.57fbf7ea19c6d.jpg" alt="Couldn't load picture" className="newspic" style="margin-left:-200px;margin-top:20px;" />
        //     </div>
        //     <marquee behavior="alternate" direction="left" className="tag">
        //         The one stop for all <span className="inner-marquee">VIT News</span> 
        //     </marquee>
        // </div>
        <div>
            {/* <Jumbotron> */}
            {/* <h1>Regular, Jumbotron!</h1>
            <p>
                This is a simple Jumbotron example.
            </p>
            <p>
                <Button variant="primary">
                Primary Button
                </Button>
            </p> */}
            {/* </Jumbotron> */}
            <div className="row">
                <div className="col-lg-6 jumbo-left">
                    <h1>Start your story!</h1>
                    <Link to="/home">
                        <Button variant="dark" className="btn">Get Started</Button>
                    </Link>
                </div>
                <div className="col-lg-6 jumbo-right">
                    <img src={Counsellor} className="img-responsive" />
                </div>
            </div>
            
        </div>
    );
}

export default Jumbo;