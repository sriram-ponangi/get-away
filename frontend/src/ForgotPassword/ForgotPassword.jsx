/*
* Authors: 
    - Sriram, Ponangi
*/
import './ForgotPassword.css';
import axios from 'axios';
import React, { Component } from 'react';

class ForgotPassword extends Component {
    state = {
        errorMessage: "",
        successMessage: ""
    }

    forgotPasswordInfo = {
        email: ""
    }

    forgotPasswordHandler = (event) => {        
        event.preventDefault();
        this.setState({
            errorMessage: "",
            successMessage: ""                    
        });

        console.log("Forgot Password:", this.forgotPasswordInfo);
        axios.post('user/forgot-password', this.forgotPasswordInfo)
            .then(res => {
                console.log(res);
                this.setState({
                    successMessage: res.data.message,
                    errorMessage: ""
                });
            }).catch(error => {
                console.log(error.response);
                if (error.response.status < 500){
                    this.setState({
                        errorMessage: error.response.data.errors.messages,
                        successMessage: ""
                    });
                }else{
                    this.setState({
                        errorMessage: "Sorry. There was some error," +
                            " could not send email. Please try again later.",
                        successMessage: ""
                    });
                }
                
            });
    }

    showMessage = () => {
        if (this.state.errorMessage) {
            return (
                <div className="alert alert-danger" role="alert">
                    {this.state.errorMessage}
                </div>
            );
        } else if (this.state.successMessage) {
            return (
                <div className="alert alert-success" role="alert">
                    {this.state.successMessage}
                </div>
            );
        } else {
            return (<div></div>);
        }

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.forgotPasswordHandler}>
                    <div className="form-group col-12">
                        <h2>Forgot Password:</h2>
                    </div>
                    {
                        this.showMessage()
                    }
                    <div className="form-group col-12">
                        <input type="email" className="form-control" id="forgotPasswordInputEmail"
                            aria-describedby="emailHelp" placeholder="Email" required={true}
                            onChange={event => this.forgotPasswordInfo.email = event.target.value} />
                        <small>If your account is valid, we will send you an email with the required information. </small>
                    </div>


                    <div className="form-check col-12">
                        <button type="submit" className="btn text-light mr-3 btn-block" style={{ background: 'black' }}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ForgotPassword;
