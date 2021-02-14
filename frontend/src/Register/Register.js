import React from 'react';
import './Register.css';

const Register = () => {
    return (

        <div className="container">
            <form>
                <div className="form-group col-12">
                    <h2 className="mt-3">Registration:</h2>
                </div>
                <div className="form-group col-12">
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="First Name" required={true} />
                </div>
                <div className="form-group col-12">
                    <input type="text" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Last Name" required={true} />
                </div>
                <div className="form-group col-12">
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Email" required={true} />
                </div>
                
                <div className="form-group col-12">
                    <input type="password" className="form-control"
                        id="exampleInputPassword1" placeholder="Password" required={true} />
                </div>
                <div className="form-group col-12">
                    <input type="password" className="form-control"
                        id="exampleInputPassword1" placeholder="Confirm Password Again" required={true} />
                </div>
                <div className="form-check col-12">
                    <button type="button" className="btn text-light mr-3 btn-block" style={{ background: 'black' }}>Register</button>
                </div>

            </form>
        </div>







    );
}

export default Register;
