/*
* Authors: 
    - Sriram, Ponangi
    - Jay, Gajjar (UI)
*/
import React from 'react';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Login from '../Login/Login';
import Register from '../Register/Register';
import './ProfileTemplate.css';
// import ReactDOM from 'react-dom';
import { NavLink, Route } from 'react-router-dom';

const ProfileTemplate = (props) => {

    return (

        <div id="mmenu_screen" className="container ProfileTemplate pt-5">
                <img src={'/img/paper-plane.png'} className="img-responsive paper-plane" width="100" alt=""/>
                <div className="login-settings card mt-5">
                    <div className="card-header">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <NavLink className="nav-link" id='login-nav' to="/profile/login"
                                activeClassName="active">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" id='register-nav' to="/profile/register"
                                activeClassName="active">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" id='forgot-password-nav' to="/profile/forgotPassword"
                                activeClassName="active">Forgot Password</NavLink>
                        </li>
                    </ul>
                    </div>
                    <div className="card-body pt-5 pb-5">
                    <Route path="/profile/login" exact component={() => <Login setCurrentUser={props.setCurrentUser} />} />
                    <Route path="/profile/register" exact component={Register} />
                    <Route path="/profile/forgotPassword" exact component={ForgotPassword} />
                    </div>
                </div>
        </div>







    );
}

export default ProfileTemplate;
