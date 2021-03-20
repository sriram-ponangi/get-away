/*
* Authors: 
    - Mandava, Abhinav
*/

import React, { Component } from 'react';
import SideNav from './Navigation/SideNav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class Highlights extends Component {
  render() {
    return (
      <div>
        <Router><SideNav></SideNav></Router>
      </div>
    );
  }
}

export default Highlights;
