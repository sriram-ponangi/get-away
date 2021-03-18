/*
* Authors: 
    - Sriram, Ponangi
*/
import React, { Component } from 'react';
import './EditProfile.css';
import logo from '../logo.png';
import axios from 'axios';
import profileLogoWhiteBG from '../profileLogoWhiteBG.png';
// import axios from 'axios';

class EditProfile extends Component {
    state = {
        errorMessage: "",
        successMessage: ""
    }

    editProfileInfo = {
        firstName: this.props.currentUser.firstName,
        lastName: this.props.currentUser.lastName,
        password: "",
        confirmPassword: ""
    }
    editProfileHandler = (event) => {        
        event.preventDefault();
        this.setState({
            errorMessage: "",
            successMessage: ""                    
        });
        
        console.log("Edit Profile:", this.editProfileInfo);
        axios.post('user/update-profile', this.editProfileInfo)
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
                            " could not update profile. Please try again later.",
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
        console.log(this.props.currentUser);
        return (
            <div id="mmenu_screen" className="container-fluid UpdateProfile" >
                <div className="row" >
                    <div className="col-md-4 col-sm-12" align="center" style={{ background: 'black' }}>
                        <div>
                            <img src={logo} className="img-fluid" alt="GetAway Application Logo" />
                        </div>
                    </div>

                    <div className="col-md-8 col-sm-12">
                        <div className="container">
                            <form onSubmit={this.editProfileHandler}>
                                <div className="form-group col-12" align="center">
                                    <h2 className="mt-3">Update Profile:</h2>
                                </div>

                                <div className="form-group col-12" align="center">
                                    <img src={profileLogoWhiteBG} className="img-fluid mb-2" alt="Profile"
                                        style={{ borderRadius: "50%", width: "200px" }} />
                                    <br />
                                    <button type="button" className="btn btn-outline-dark mr-3 ml-3" disabled>Edit Image</button>
                                    {/* <input type="file" className="form-control form-control-lg mr-3 ml-3" /> */}
                                    <hr />
                                </div>
                                {
                                    this.showMessage()
                                }
                                <div className="form-group col-12">
                                    <label>Account: </label>
                                    <input type="text" className="form-control text-dark" style={{ pointerEvents: 'none' }}
                                        value={this.props.currentUser.email} readOnly={true} />
                                    <small>Email-Id cannot be changed.</small>
                                </div>
                                <div className="form-group col-12">
                                    <label>First Name: </label>
                                    <input type="text" className="form-control" id="editProfileInputFirstName"
                                        aria-describedby="emailHelp" placeholder="First Name"
                                        defaultValue={this.props.currentUser.firstName}
                                        onChange={event => this.editProfileInfo.firstName = event.target.value} />
                                </div>

                                <div className="form-group col-12">
                                    <label>Last Name: </label>
                                    <input type="text" className="form-control" id="editProfileInputLastName"
                                        aria-describedby="emailHelp" placeholder="Last Name"
                                        defaultValue={this.props.currentUser.lastName}
                                        onChange={event => this.editProfileInfo.lastName = event.target.value} />
                                </div>

                                <div className="form-group col-12">
                                    <label>Password: </label>
                                    <input type="password" className="form-control"
                                        id="editProfileInputNewPassword" placeholder="New Password"
                                        onChange={event => this.editProfileInfo.password = event.target.value} />
                                </div>

                                <div className="form-group col-12">
                                    <label>Confirm Password: </label>
                                    <input type="password" className="form-control"
                                        id="editProfileInputConfirmPassword" placeholder="Confirm New Password"
                                        onChange={event => this.editProfileInfo.confirmPassword = event.target.value} />
                                </div>
                                <div className="form-check col-12">
                                    <button type="submit" className="btn text-light mr-3 btn-block" style={{ background: 'black' }}>Update</button>
                                </div>

                            </form>
                            <br /><hr /><br />
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default EditProfile;