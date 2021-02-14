import React from 'react';
// import logo from '../logo.png';
import './Login.css';

const Login = () => {
    return (

        <div className="container">
            <form>
                <div className="form-group col-12">
                    <h2 className="mt-3">Login:</h2>
                </div>
                <div className="form-group col-12">
                    <input type="email" className="form-control" id="loginInputEmail"
                        aria-describedby="emailHelp" placeholder="Email" required={true} />
                </div>
                <div className="form-group col-12">
                    <input type="password" className="form-control"
                        id="loginInputPassword" placeholder="Password" required={true} />
                </div>
                <div className="form-check col-12">
                    <button type="submit" className="btn  mr-3 text-light btn-block" style={{ background: 'black' }}>Login</button>
                </div>
                
            </form>
        </div>







    );
}

export default Login;
