/*
* Authors: 
    - Mandava, Abhinav,
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SideNavItems } from './SideNavItems'
import HighlightGroup from '../Cards/HighlightGroup.jsx'
import './Navigation.css';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
// import { this.props.highlightsData } from '../Cards/this.props.highlightsData.js'
import Destination from '../Carousels/Destination.jsx';
import { Container } from 'react-bootstrap'
import axios from 'axios';

class SideNav extends Component {
  state = {
    data: this.props.highlightsData,
    category: this.props.highlightsData[0].category,
    locations: this.props.highlightsData[0].locations,
    destinationId: this.props.destinationId
  }

  displayLocations = (title) => {
    let i
    axios.get('highlight/locations', {
      params: {
        destinationId: this.state.destinationId,
        category: title.toLowerCase()
      }
    }).then(
      res => {
        this.setState({ category: title, locations: res.data.locations });

      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    let locationDecks = [];
    let i = 0;
    while (i < this.state.locations.length) {
      locationDecks.push(
        this.state.locations.slice(i, i + 7)
      );
      i = i + 7;
    }
    console.log(locationDecks)
    let locations = (
      <div className='h-scroll'>
        {locationDecks.map((item) => {
          return (
            <HighlightGroup hTitle={this.state.category} data={item} showLocations={true}></HighlightGroup>
          );
        })}
      </div>
    )
    return (
      <div>
        <Container fluid>
          <Row>
            <Col className="bg-dark" xs={12} md={2}>
              <nav className='nav-menu sideNav'>
                <h3 className='d-block nav-head'>What are you looking for?</h3>
                <ul className='nav-menu-items d-block' >
                  {SideNavItems.map((item) => {
                    return (
                      <li className={item.cName}>
                        <Link to={item.path} onClick={() => { this.displayLocations(item.title) }}>
                          <span className='nav-items-span'>{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </Col>
            <Col xs={12} md={10}>

              <div className='crsl'>
                <h1 className='dest-title'>HALIFAX, CANADA</h1>
                <div className='row'>
                  <div className='col-md-7'>
                    <Destination></Destination>
                  </div>
                  <div className='col-md-5'>
                    <div className="side-desc">
                      <p className='description'>Compared to conurbations such as Vancouver and Toronto, Halifax barely qualifies as a city, but this seaside town punches well above its size: it's dotted with red-brick heritage buildings,
                      public parks and a landmark citadel, blessed with some first-rate museums, and home to a truly epic 4km seafront boardwalk. True, relentless downtown redevelopment has done little to enhance the city's charm:
              boxy office blocks and uninspiring concrete carbuncles are rising where handsome ironstones and Victorian townhouses once stood, although some exceptions (notably the new Central Library) show what can be achieved when planners exercise a little more quality control.</p>
                      <p className='description'> The nightlife and dining scene has
                      come on in leaps and bounds in recent years: there are craft breweries and locavore
              bistros galore, especially around the trendy North End.</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-10 mt-10" />
              <div className="bgclr">
                <h1 className="highlight-title" > {this.state.category} </h1>
                {locations}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SideNav;
