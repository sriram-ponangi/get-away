import React, { Component } from 'react';
import './EditProfile.css';
import logo from '../logo.png';

class EditProfile extends Component {
    state = {
        profilePicture: "https://i.pinimg.com/originals/89/64/99/8964998576cfac440b3a14df748fc670.png",
        firstName: "Sriram",
        lastName: "Ponangi",
        email: "sriram.ponangi@dal.ca",
    }
    render() {
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
                            <form>
                                <div className="form-group col-12" align="center">
                                    <h2 className="mt-3">Update Profile:</h2>
                                </div>

                                <div className="form-group col-12" align="center">
                                    <img src={this.state.profilePicture} className="img-fluid" alt="Profile"
                                        style={{ borderRadius: "50%", width: "200px" }} />
                                    <br />                                    
                                    <button type="button" className="btn btn-outline-dark mr-3 ml-3" disabled>Edit Image</button>
                                    {/* <input type="file" className="form-control form-control-lg mr-3 ml-3" /> */}
                                    <hr />
                                </div>
                                <div className="form-group col-12">
                                    <label>Account: </label>
                                    <input type="text" className="form-control text-dark" style={{pointerEvents:'none'}} value={this.state.email} readOnly={true}/>
                                    <small>Email-Id cannot be changed.</small>
                                </div>
                                <div className="form-group col-12">
                                    <label>First Name: </label>
                                    <input type="text" className="form-control" id="editProfileInputFirstName"
                                        aria-describedby="emailHelp" placeholder="First Name" defaultValue={this.state.firstName} />
                                </div>

                                <div className="form-group col-12">
                                    <label>Last Name: </label>
                                    <input type="text" className="form-control" id="editProfileInputLastName"
                                        aria-describedby="emailHelp" placeholder="Last Name" defaultValue={this.state.lastName} />
                                </div>

                                <div className="form-group col-12">
                                    <label>Password: </label>
                                    <input type="password" className="form-control"
                                        id="exampleInputPassword1" placeholder="New Password" />

                                </div>
                                <div className="form-check col-12">
                                    <button type="button" className="btn text-light mr-3 btn-block" style={{ background: 'black' }}>Update</button>
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