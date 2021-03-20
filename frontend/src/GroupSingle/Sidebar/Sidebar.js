/*
* Authors: 
- Jay, Gajjar (UI)    
- Sriram, Ponangi    
*/
import React from 'react';
import './Sidebar.css';
import ListGroup from 'react-bootstrap/ListGroup';

const sidebar = (props) => {
    let pop = props.members;
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
            {
                Object.values(props.members).map(single => {
                    return (
                        <ListGroup.Item variant="info" key={single._id}>
                            <span>{single.firstName}</span>
                            <span> {single.lastName}</span>
                        </ListGroup.Item>
                    )
                })
            }
            </ListGroup>
        </div>
    );
}

export default sidebar;