/*
* Authors: 
- Jay, Gajjar (UI)    
- Sriram, Ponangi    
*/
import './GroupSingle.css';
import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Poll from './Polls/Polls';


class GroupSingle extends Component {

  state = {
    groupDetails: 
      {
        title: "Halifax Hustle",
        description: "This group is dedicated to tourists and travelers in Halifax, who are looking to cover the major aspects of the city within a few days.",
      }
  }

  updateTitle = (event) => {
    this.setState({
        groupDetails: {
          title: event.target.value
        }
      })
  }
  updateDescription = (event) => {
    this.setState({
        groupDetails: {
          description: event.target.value
        }
      })
  }

  render(){

    return (
      <Container className="bg-white">
        <Row>
          <Col className="p-5 text-left" lg="8" md="12" sm="12" xs="12">
            <h1 className="display-3" id="group-title">{this.state.groupDetails.title}</h1>
            <h4 className="font-weight-light mb-3">{this.state.groupDetails.description}</h4>
            <div className="d-block mb-3">
                <a className="btn btn-primary mr-3" data-toggle="modal" data-target="#pollModal"><i className="fas fa-plus"></i> Create Poll</a>
            </div>
            <div className="d-block">
                <a className="btn btn-outline-secondary mr-3" data-toggle="modal" data-target="#detailsModal"><i className="fas fa-edit"></i> Edit Group Details</a>
                <a href="#" className="btn btn-danger"><i className="fas fa-sign-out-alt"></i> Leave Group</a>
            </div>
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
            <Poll/>

          </Col>
          <Col className="sidebar-col pt-5 pb-5 pl-3 pr-3" xs="12" sm="12" md="12" lg="4">
            <Sidebar/>
          </Col>
        </Row>
        <div className="modal fade" tabIndex="-1" role="dialog" id="detailsModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Edit Group Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <input className="form-control mb-3" type="text" name="gtitle" id="gtitleField" onChange={this.updateTitle} value={this.state.groupDetails.title} />
                        <textarea name="gdescription" className="form-control" id="gdescriptionField" onChange={this.updateDescription} rows="5" value={this.state.groupDetails.description} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Save changes</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
      </Container>
  );
  }
}

export default GroupSingle;
