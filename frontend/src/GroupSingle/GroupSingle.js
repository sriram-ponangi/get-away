import './GroupSingle.css';
import React, { Component } from 'react';
import {useState} from 'react';
import Sidebar from './Sidebar/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class GroupSingle extends Component {

  state = {
    groupDetails: [
      {
        title: "Halifax Hustle",
        description: "",
      }
    ]
  }

  render(){

    return (
      <Container className="bg-white">
        <Row>
          <Col className="p-5 text-left" lg="8" md="12" sm="12" xs="12">
            <h1 className="display-3" id="group-title">Halifax Hustle</h1>
            <h4 className="font-weight-light mb-3">This group is dedicated to tourists and travelers in Halifax, who are looking to cover the major aspects of the city within a few days.</h4>
            <a className="btn btn-outline-secondary mr-3"><i className="fas fa-edit"></i> Edit Group Details</a>
            <a href="#" className="btn btn-danger"><i className="fas fa-sign-out-alt"></i> Leave Group</a>
            <hr className="mb-5 mt-5"/>
            <h4>Rules:</h4>
            <ul>
              <li className="text-success">Please be respectful</li>
              <li className="text-danger">No Racism or Misogny Allowed or Tolerated</li>
              <li>Please be kind and considerate</li>
              <li>Try to help everyone</li>
              <li>Need to keep up with the pace of the group</li>
              <li>Required to install <b>SplitWise</b> App to manage finances</li>
            </ul>
          </Col>
          <Col className="sidebar-col pt-5 pb-5 pl-3 pr-3" xs="12" sm="12" md="12" lg="4">
            <Sidebar/>
          </Col>
        </Row>
      </Container>
  );
  }
}

export default GroupSingle;
