import React, {useState, useEffect} from 'react';
import fire from '../../firebase';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const login = async () => {

  }

  const logout = async () => {

  }
  

    return (
        <div>
            <div className="container">
      <div className="row login-box">
        <div className="col-sm-6 images">
          <img className="img-1"
            src="https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="" />
        </div>
        <div className="col-sm-6 login-content">
          <div className="login-title">Member Login</div>
  
          <form className="login-form" action="/login" method="POST">
            <div className="login-info">
              <div className="symbol">
                <i className="fa fa-user"></i>
              </div>
              <div className="info">
                
                <input type="text" className="input" name="username" placeholder="Username" 
                onChange={(event)=>{
                  setLoginEmail(event.target.value);
                }}
                />

              </div>
            </div>
            <div className="login-info">
              <div className="symbol">
                <i className="fa fa-lock"></i>
              </div>
              <div className="info">
                <input type="password" className="input" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="login-btn">
              <button>Sign In</button>
            </div>
            <div className="login-new">
              <Link to="/signup">New Here? Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div> 
        </div>
    );
}

export default Login;