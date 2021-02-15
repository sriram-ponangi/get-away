import React from 'react';
// import logo from '../logo.png';
import './Login.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Component } from 'react';
import { Button } from 'bootstrap';

class Login extends Component {

    state = {
        loggedIn: false,
       
    };

    userLoginInfo = {
        email: "",
        password: ""
    };

    loginHandler = (event) => {
        event.preventDefault();
        console.log(this.userLoginInfo);

        axios.post('auth/login', this.userLoginInfo)
            .then(res => {
                localStorage.setItem('jwt', res.data.jwt);
                this.setState({
                    loggedIn: true
                });

                let myHeaderConfig = {
                    headers: {
                        'Authorization': 'Bearer '+  res.data.jwt
                      }
                }
                axios.get('user', myHeaderConfig).then(
                    res => {
                        this.props.setCurrentUser(res.data);
                    },
                    error => {                        
                        console.log(error);
                    }
                );

            })
            .catch(error => {
                console.log(error.body);
            })
            
    }

    render() {
        if (this.state.loggedIn) {            
            return (
                <Redirect to={"/"} />
            );
        }
        return (
            <div className="container">
                <form onSubmit={this.loginHandler}>
                    <div className="form-group col-12">
                        <h2 className="mt-3">Login:</h2>
                    </div>
                    <div className="form-group col-12">
                        <input type="email" className="form-control" id="loginInputEmail"
                            aria-describedby="emailHelp" placeholder="Email" required={true}
                            onChange={event => this.userLoginInfo.email = event.target.value} />
                    </div>
                    <div className="form-group col-12">
                        <input type="password" className="form-control"
                            id="loginInputPassword" placeholder="Password" required={true}
                            onChange={event => this.userLoginInfo.password = event.target.value} />
                    </div>
                    <div className="form-check col-12">
                        <button type="submit" className="btn  mr-3 text-light btn-block" style={{ background: 'black' }}>
                            Login
                        </button>
                    </div>

                </form>
            </div>







        );
    }
}



export default Login;
