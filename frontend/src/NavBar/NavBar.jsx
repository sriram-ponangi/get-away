/*
* Authors: 
    - Sriram, Ponangi
    - Jay, Gajjar
*/

import axios from 'axios';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  state = {
    groups:[
      {
        _id: "",
        name: ""
      }
    ]
  }
  componentDidMount = () =>{
    axios.get('user/groups').then(result => {
      this.setState({
        groups:result.data.groups
      })
    });
  }

  componentWillReceiveProps = (props) => {
    console.log(props);
  }

  navLinks = () => {
    
    if (this.props.currentUser) {
      return (
        <ul className="navbar-nav mr-auto main-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to={"/destination/search"}>Destinations</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              My Groups
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {
                this.state.groups.map(group => {
                  return <NavLink to={"/groups/"+group._id} gid={group._id} className="nav-link text-dark" key={group._id}>{group.name}</NavLink>
                })
              }
            </div>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" to={"/aboutus"}>About Us</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" to={"/whyus"}>Why US</NavLink>
          </li>
          <li className="nav-item ">
          <NavLink className="nav-link active" to={"/contactus"}>Contact Us</NavLink>
          </li>
        </ul>
      )
    }
    else {
      return (
        <ul className="navbar-nav mr-auto main-nav">
          <li className="nav-item">
            <NavLink className="nav-link active" to={"/destination/search"}>Destinations</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" to={"/aboutus"}>About Us</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link active" to={"/whyus"}>Why US</NavLink>
          </li>
          <li className="nav-item ">
          <NavLink className="nav-link active" to={"/contactus"}>Contact Us</NavLink>
          </li>
        </ul>
      )
    }
  }

  logoutHandler = () => {
    localStorage.clear();
    this.props.setCurrentUser(null);
  }

  welcomeMessage = () => {
    if (this.props.currentUser && this.props.currentUser.firstName) {
      return (
        <li className="nav-item ">
          <NavLink className="text-light" to="/profile/edit"
            style={{ fontFamily: 'Verdana' }}>Welcome, {this.props.currentUser.firstName}</NavLink>
        </li>
        //   <li className="nav-item">
        //   <NavLink className="navbar-brand" to="/" style={{ color: 'white' }}>Welcome, {this.props.currentUser.firstName}</NavLink>
        // </li>
      );

    }
  }

  dropdownNavLinks = () => {

    if (this.props.currentUser) {

      return (
        <div className="dropdown-menu dropdown-menu-right">
          <NavLink className="dropdown-item" to="/profile/edit">Update Profile</NavLink>
          <NavLink className="dropdown-item" to="/" onClick={this.logoutHandler}>Logout</NavLink>
        </div>
      )
    }
    else {
      return (
        <div className="dropdown-menu dropdown-menu-right">
          <NavLink className="dropdown-item" to="/profile/login">Login</NavLink>
          <NavLink className="dropdown-item" to="/profile/register">Register</NavLink>
        </div>
      )
    }
  }

  render() {
    return (
      <div>

        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ background: 'black' }}>
          <NavLink className="navbar-brand" to="/"><img src={'/img/getaway-logo.png'} className="img-responsive" alt="GetAway Application Logo" /></NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              this.navLinks()
            }
            <ul className="nav navbar-nav">
              {
                this.welcomeMessage()
              }
            </ul>
            <ul className="nav navbar-nav user-settings">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-user-cog"></i>
                </a>
                {
                  this.dropdownNavLinks()
                }
              </li>
            </ul>

          </div>
        </nav>


      </div>
    );
  }


}

export default NavBar;