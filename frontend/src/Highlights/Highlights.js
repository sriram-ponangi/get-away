/*
* Authors: 
    - Mandava, Abhinav
*/

import React, { Component } from 'react';
import SideNav from './Navigation/SideNav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';


class Highlights extends Component {

  state = {
    highlightsData: null
  }

  componentDidMount() {
    axios.get('highlight/highlights', {
      params: {
        destinationId: this.props.location.destinationId
      }
    }).then(
      res => {
        this.setState({ highlightsData: res.data });

      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    console.log(this.props.location.destinationId)
    let content = null
    if (this.state.highlightsData != null) {
      console.log(this.state.highlightsData)
      content = (
        <div>
          <Router><SideNav highlightsData={this.state.highlightsData} destinationId={this.props.location.destinationId}></SideNav></Router>
        </div>
      )
    }

    return (
      <div>
        {content}
      </div>


    );
  }
}


export default Highlights;
