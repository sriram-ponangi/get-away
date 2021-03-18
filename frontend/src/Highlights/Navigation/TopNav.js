import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
// import './Navigation.css';

class TopNav extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img src='./logo.png' style={{ width: 250, marginTop: -15 }} height="90"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className='nav-link' style={{ color: 'white', marginTop: 15 }}><span>Destinations</span></Nav.Link>
            <Nav.Link href="#link" className='nav-link' style={{ color: 'white', marginTop: 15 }}><span>Find People</span></Nav.Link>
            <Nav.Link href="#link" className='nav-link' style={{ color: 'white', marginTop: 15 }}><span>Wishlist</span></Nav.Link>
            <Nav.Link href="#link" className='nav-link' style={{ color: 'white', marginTop: 15 }}><span>About Us</span></Nav.Link>
            <Nav.Link href="#link" className='nav-link' style={{ color: 'white', marginTop: -7 }}><span><img src='./avatar.png' className='avatar' /> </span></Nav.Link>
            <Nav.Link href="#link" className='nav-link' style={{ color: 'white', marginTop: 15 }}>Username</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      // <div><nav className="navbar navbar-light bg-dark">
      //   <a class="navbar-brand" href="#">
      //   <img src='./logo.png' style={{ width: 250, marginTop: -15 }} height="90"></img>
      //       Bootstrap
      // </a>
      // </nav>
      // </div>



    );

  }
}

export default TopNav;