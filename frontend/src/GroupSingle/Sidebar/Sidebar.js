/*
* Authors: 
- Jay, Gajjar (UI)    
- Sriram, Ponangi    
*/
import React from 'react';
import './Sidebar.css';
import ListGroup from 'react-bootstrap/ListGroup';

const sidebar = (props) => {
    return (
        <div className="tb-sidebar">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Add Member By User ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">Add To Group</button>
                </div>
            </div>
            <hr className="bg-dark mx-5 my-4"/>
            <h4>Rules:</h4>
            <ul>
              <li className="text-success">Please be respectful</li>
              <li className="text-danger">No Racism or Misogny Allowed or Tolerated</li>
              <li>Please be kind and considerate</li>
              <li>Try to help everyone</li>
              <li>Need to keep up with the pace of the group</li>
              <li>Required to install <b>SplitWise</b> App to manage finances</li>
            </ul>
            <hr className="bg-dark mx-5 my-4"/>
            <h3 className="text-left mb-3">Members</h3>
            <ListGroup className="text-left">
                <ListGroup.Item variant="info">
                    <div className="row">
                        <div className="col-md-7">C. Ronaldo</div>
                        <div className="text-right col-md-5">
                            <a href="#reject" className="btn btn-danger btn-sm">Vote Out</a> 
                        </div> 
                    </div>
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                    <div className="row">
                        <div className="col-md-7">
                        Eden Hazard <div className="ml-3 badge badge-pill badge-primary">Admin</div>
                        </div>
                        <div className="text-right col-md-5">
                            <a href="#reject" className="btn btn-danger btn-sm disabled">Vote Out</a> 
                        </div> 
                    </div>
                </ListGroup.Item>
                <ListGroup.Item variant="info">
                    <div className="row">
                        <div className="col-md-7">Lionel Messi</div>
                        <div className="text-right col-md-5">
                            <a href="#reject" className="btn btn-danger btn-sm">Vote Out</a> 
                        </div> 
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default sidebar;