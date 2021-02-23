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
            <h3 className="text-left mb-3">Pending Requests</h3>
            <ListGroup className="text-left">
                <ListGroup.Item>
                    <div className="row">
                        <div className="col-md-5">Harry Potter</div>
                        <div className="text-right col-md-7">
                            <a href="#approve" className="btn btn-sm btn-success mr-3">Approve</a>
                            <a href="#reject" className="btn btn-outline-danger btn-sm">Reject</a> 
                        </div> 
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="row">
                        <div className="col-md-5">Neville L.</div>
                        <div className="text-right col-md-7">
                            <a href="#approve" className="btn btn-sm btn-success mr-3">Approve</a>
                            <a href="#reject" className="btn btn-outline-danger btn-sm">Reject</a> 
                        </div> 
                    </div>
                </ListGroup.Item>
                <ListGroup.Item>
                    <div className="row">
                        <div className="col-md-5">Ronald K. Weasley</div>
                        <div className="text-right col-md-7">
                            <a href="#approve" className="btn btn-sm btn-success mr-3">Approve</a>
                            <a href="#reject" className="btn btn-outline-danger btn-sm">Reject</a> 
                        </div> 
                    </div>
                </ListGroup.Item>
            </ListGroup>
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