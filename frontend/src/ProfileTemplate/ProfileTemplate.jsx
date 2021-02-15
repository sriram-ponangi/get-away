import React from 'react';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import Login from '../Login/Login';
import logo from '../logo.png';
import Register from '../Register/Register';
import './ProfileTemplate.css';
// import ReactDOM from 'react-dom';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';

const ProfileTemplate = (props) => {

    return (

        <div id="mmenu_screen" className="container-fluid ProfileTemplate" >
            <div className="row" >
                <div className="col-md-4 col-sm-12" align="center" style={{ background: 'black' }}>
                    <div>
                        <img src={logo} className="img-fluid" alt="GetAway Application Logo" />
                    </div>
                </div>

                <div className="col-md-8 col-sm-12">
                    <br />

                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" id='login-nav' to="/profile/login"
                                activeClassName="active">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" id='register-nav' to="/profile/register"
                                activeClassName="active">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark" id='forgot-password-nav' to="/profile/forgotPassword"
                                activeClassName="active">Forgot Password</NavLink>
                        </li>
                    </ul>
                    <br />

                    <Route path="/profile/login" exact component={() => <Login setCurrentUser={props.setCurrentUser} />} />
                    <Route path="/profile/register" exact component={Register} />
                    <Route path="/profile/forgotPassword" exact component={ForgotPassword} />
                    <br /><hr /><br />



                </div>
            </div>
        </div>







    );
}

export default ProfileTemplate;
