import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SideNavItems } from './SideNavItems'
import HighlightGroup from '../Cards/HighlightGroup.jsx'
import './Navigation.css';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { highlightsData } from '../Cards/HighlightsData.js'
import Destination from '../Carousels/Destination.jsx';
import { Container } from 'react-bootstrap'

class SideNav extends Component {
  state = {
    category: 'Fishing'
  }
  showHighlights = (e) => {
    this.setState({
      category: `${e.target.attributes.cat.value}`
    })
  }
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col className="bg-dark" xs={12} md={2}>
            <nav className='nav-menu'>
          <h3 className='d-block nav-head'>What are you looking for?</h3>
          <ul className='nav-menu-items d-block' >
            {SideNavItems.map((item) => {
              return (
                <li className={item.cName}>
                  <Link to={item.path} onClick={() => {this.setState({category: `${item.title}`})}}>
                    <span className='nav-items-span'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
            </Col>
            <Col xs={12} md={4}><Destination></Destination>
              {/* <Row className="highlights">
                <Col xs={12} md={12}><HighlightGroup data={highlightsData}></HighlightGroup></Col>
              </Row> */}
              <hr className="mb-10 mt-10"/>
              <HighlightGroup hTitle={this.state.category} data={highlightsData[this.state.category]}></HighlightGroup>
            </Col>
            <Col xs={12} md={4}>
              <h1 className='title'>HALIFAX, CANADA</h1>
              <p className='description'>Compared to conurbations such as Vancouver and Toronto, Halifax barely qualifies as a city, but this seaside town punches well above its size: it's dotted with red-brick heritage buildings,
              public parks and a landmark citadel, blessed with some first-rate museums, and home to a truly epic 4km seafront boardwalk. True, relentless downtown redevelopment has done little to enhance the city's charm:
              boxy office blocks and uninspiring concrete carbuncles are rising where handsome ironstones and Victorian townhouses once stood, although some exceptions (notably the new Central Library) show what can be achieved when planners exercise a little more quality control.</p>
              <p className='description'>Above all, Halifax is a liveable city: its small size, fresh air and easy-going lifestyle
              mean it scores high in quality-of-life tables. The nightlife and dining scene has
              come on in leaps and bounds in recent years: there are craft breweries and locavore
              bistros galore, especially around the trendy North End.</p>
            </Col>
          </Row>
        </Container>
      </div>
    );

  }
}

export default SideNav;
