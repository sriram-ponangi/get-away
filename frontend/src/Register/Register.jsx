/*
* Authors: 
    - Sriram, Ponangi
*/
import './Register.css';
import axios from 'axios';
import React, { Component } from 'react';

class Register extends Component {
    state = {
        errorMessage: "",
        successMessage: ""
    }
    userRegistrationInfo = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    registerHandler = (event) => {
        event.preventDefault();
        this.setState({
            errorMessage: "",
            successMessage: ""                    
        });

        console.log(this.userRegistrationInfo);

        if (this.userRegistrationInfo.password !== this.userRegistrationInfo.confirmPassword) {
            this.setState({ errorMessage: "Password and Confirm Password do not match." });
        } else {        
            let userRegistrationInfoRequestBody = Object.assign({}, this.userRegistrationInfo);
            delete userRegistrationInfoRequestBody.confirmPassword;
            console.log(userRegistrationInfoRequestBody);
            axios.post('auth/register', userRegistrationInfoRequestBody)
                .then(res => {
                    this.setState({ successMessage: "Account Created Successfully." });
                }).catch(error => {
                    console.log(JSON.stringify(error.response));
                    if (error.response.data.errors.messages){
                        this.setState({ errorMessage: "Error Message: " + error.response.data.errors.messages,
                        successMessage:""});
                    }else if(error.response.data.errors.keyValue) {
                        this.setState({ errorMessage: "Account Exists For "+ error.response.data.errors.keyValue.email,
                        successMessage:""});
                    }else{
                        this.setState({ errorMessage: "Sorry. There was some error,"+
                        " could not register your account. Please try again later.",
                        successMessage:""});
                    }
                })
        }

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


                <form onSubmit={this.registerHandler}>
                    <div className="form-group col-12">
                        <h2>Registration:</h2>
                    </div>
                    {
                        this.showMessage()
                    }
                    <div className="form-group col-12">
                        <input type="text" className="form-control" id="registerInputFirstName"
                            placeholder="First Name" required={true}
                            onChange={event => this.userRegistrationInfo.firstName = event.target.value} />
                    </div>
                    <div className="form-group col-12">
                        <input type="text" className="form-control" id="registerInputLastName"
                            placeholder="Last Name" required={true}
                            onChange={event => this.userRegistrationInfo.lastName = event.target.value} />
                    </div>
                    <div className="form-group col-12">
                        <input type="email" className="form-control" id="loginInputEmail"
                            aria-describedby="emailHelp" placeholder="Email" required={true}
                            onChange={event => this.userRegistrationInfo.email = event.target.value} />
                    </div>

                    <div className="form-group col-12">
                        <input type="password" className="form-control"
                            id="loginInputPassword" placeholder="Password" required={true}
                            onChange={event => this.userRegistrationInfo.password = event.target.value} />
                    </div>

                    <div className="form-group col-12">
                        <input type="password" className="form-control"
                            id="loginInputConfirmPassword" placeholder="Confirm Password" required={true}
                            onChange={event => this.userRegistrationInfo.confirmPassword = event.target.value} />
                    </div>

                    <div className="form-check col-12">
                        <button type="submit" className="btn text-light mr-3 btn-block" style={{ background: 'black' }}>Register</button>
                    </div>

                </form>

            </div>
        );
    }
}

export default Register;

