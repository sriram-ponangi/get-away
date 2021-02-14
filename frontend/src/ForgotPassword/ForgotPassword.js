import React from 'react';

import './ForgotPassword.css';

const ForgotPassword = () => {
    return (

        <div className="container">
            <form>
                <div className="form-group col-12">
                    <h2 className="mt-3">Forgot Password:</h2>
                </div>

                <div className="form-group col-12">
                    <input type="email" className="form-control" id="forgotPasswordInputEmail"
                        aria-describedby="emailHelp" placeholder="Email" required={true} />
                    <small>If your account is valid, we will send you an email with the required information. </small>
                </div>


                <div className="form-check col-12">
                    <button type="button" className="btn text-light mr-3 btn-block" style={{ background: 'black' }}>Submit</button>
                </div>

            </form>
        </div>







    );
}

export default ForgotPassword;
