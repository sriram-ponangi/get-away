import React from 'react';
import logo from '../logo.png';
import './UpdateProfile.css';

const UpdateProfile = (props) => {

    console.log(props.userId);

    let userProfile = {
        profilePicture: "https://talkmusictome.files.wordpress.com/2013/07/8.jpg",
        // profilePicture: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",
        firstName: "Sriram",
        lastName: "Ponangi",
        email: "sriram.ponangi@dal.ca",

    }

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
                                <img src={userProfile.profilePicture} className="img-fluid" alt="Profile Picture"
                                    style={{ borderRadius: "50%", width: "200px" }} />
                                <br />
                                <label>Account: <b>{userProfile.email}</b></label> 
                                <button type="button" className="btn btn-outline-dark mr-3 ml-3">Edit Image</button>
                                <hr/>
                            </div>
                            <div className="form-group col-12">
                                <label>First Name: </label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="First Name" defaultValue={userProfile.firstName} />
                            </div>

                            <div className="form-group col-12">
                                <label>Last Name: </label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Last Name" defaultValue={userProfile.lastName} />
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
                        <br/><hr/><br/>
                    </div>


                </div>
            </div>
        </div>







    );
}

export default UpdateProfile;
