import React, { Component } from 'react';
import TopNav from './Navigation/TopNav.js';
import SideNav from './Navigation/SideNav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class Highlights extends Component {
  render() {
    return (
      <div>
        {/* <TopNav></TopNav> */}
        <Router><SideNav></SideNav></Router>
      </div>
    );
  }
}

export default Highlights;
