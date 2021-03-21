/*
* Authors: 
    - Mandava, Abhinav
*/

import React, { Component } from 'react';
import './Destination.css'

class Destination extends Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide b-size" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 crsl-img" src="/highlights/halifax1.jpg" alt="First slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 crsl-img" src="/highlights/halifax4.jpg" alt="Third slide"></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );

  }
}

export default Destination;
