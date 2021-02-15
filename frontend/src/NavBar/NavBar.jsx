import logo from '../profileLogoBlackBG.png';
import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
// import axios from 'axios';

class NavBar extends Component {


  navLinks = () => {
    if (this.props.currentUser) {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link active" to={"/destination/search"}>Destinations</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/">Link</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link disabled" href="/" >Link</a>
          </li>
        </ul>
      )
    }
    else {
      return (
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link active" to={"/destination/search"}>Destinations</NavLink>
          </li>
        </ul>
      )
    }
  }

  logoutHandler = () => {
    localStorage.clear();
    this.props.setCurrentUser(null);
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
          <NavLink className="dropdown-item" to="/profile/register">Sign Up</NavLink>
        </div>
      )
    }
  }

  render() {
    return (
      <div>

        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ background: 'black' }}>
          <NavLink className="navbar-brand" to="/" style={{ color: 'red' }}>GetAway!</NavLink>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
              this.navLinks()
            }
            {/* <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/destination/search">Destinations</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/">Link</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link disabled" href="/" >Link</a>
              </li>
            </ul> */}

            <ul className="nav navbar-nav ml-auto">
              {
                this.welcomeMessage()
              }
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src={logo} width="40" height="40" className="rounded-circle" />
                </a>
                {
                  this.dropdownNavLinks()
                }
                {/* <div className="dropdown-menu dropdown-menu-right">
                  <Link className="dropdown-item" to="/profile/login">Login</Link>
                  <Link className="dropdown-item" to="/profile/register">Sign Up</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/profile/edit">Update Profile</Link>
                  <Link className="dropdown-item" to="/profile/login">Logout</Link>
                </div> */}


              </li>
            </ul>

          </div>
        </nav>


      </div>
    );
  }

  welcomeMessage = () => {
    if (this.props.currentUser && this.props.currentUser.firstName) {
      return (
        <li className="nav-item ">
          <h4 >Welcome,{this.props.currentUser.firstName}</h4>
        </li>
      );

    }
  }
}

export default NavBar;