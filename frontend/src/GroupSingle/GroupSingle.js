/*
* Authors: 
- Jay, Gajjar   
- Sriram, Ponangi    
*/
import './GroupSingle.css';
import React, { Component } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar/Sidebar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GroupComments from '../GroupComments/GroupComments';
import {Redirect} from 'react-router-dom';


class GroupSingle extends Component {

  state = {
    allgroups: [],
    groupDetails: 
      {
        _id: "",
        title: "",
        description: "",
        members: ""
      }
  }

  leaveGroup = () => {
    console.log(this.state.groupDetails._id);
    axios.delete('group/member', {data: {_id:this.state.groupDetails._id}}).then(res=>{
      window.location.href = "/";
    }).catch(error=>{
      console.log(error);
    })
  }

  componentDidMount = () =>{
    let g_id = this.props.match.params._id;
    // Get All Groups
    axios.get('user/groups').then(result => {
      this.setState({
        allgroups: result.data.groups
      })
      result.data.groups.map(groupSingle => {
        if(groupSingle._id == g_id){
          axios.get('/group/member', { params: { group_id: g_id } }).then(memRes => {
            this.setState({
              groupDetails:{
                _id: g_id,
                name: groupSingle.name,
                description: groupSingle.description,
                members: memRes.data.members
              }
            })
          })
        }
      })
    })
  }

  componentWillReceiveProps = (props) =>{

    // Get Group Members

    let newId = props.match.params._id;

    if( newId != this.state.groupDetails._id){
      this.state.allgroups.map(single => {
        if(single._id == newId){
          axios.get('/group/member', { params: { group_id: newId } }).then(result => {
            this.setState({
              groupDetails:{
                _id: newId,
                name: single.name,
                description: single.description,
                members: result.data.members
              }
            })
          })
        }
      })
    }
  }


  render(){

    let galleryUri = "/groups/" + this.state.groupDetails._id + "/gallery";

    return (
      <Container className="bg-white">
        <Row>
          <Col className="p-5 text-left" lg="8" md="12" sm="12" xs="12">
            <h1 className="display-3" id="group-title">{this.state.groupDetails.name}</h1>
            <h4 className="font-weight-light mb-3">{this.state.groupDetails.description}</h4>
            <div className="d-block mb-3s">
                <a className="btn btn-outline-secondary mr-3" href={galleryUri}><i className="fas fa-images"></i> View Group Photos</a>
                <a onClick={this.leaveGroup} className="btn btn-danger"><i className="fas fa-sign-out-alt"></i> Leave Group</a>
            </div>
            {/* <div className="d-block">
              <a className="btn btn-outline-secondary mr-3"><i className="fas fa-images"></i> View Group Photos</a>
            </div> */}
            <hr className="mb-5 mt-5"/>
            <GroupComments group_id={this.props.match.params._id}/>
          </Col>
          <Col className="sidebar-col pt-5 pb-5 pl-3 pr-3" xs="12" sm="12" md="12" lg="4">
            <Sidebar members={this.state.groupDetails.members}/>
          </Col>
        </Row>
      </Container>
  );
  }
}

export default GroupSingle;
