/*
* Authors: 
- Jay, Gajjar (UI)    
- Sriram, Ponangi    
*/
import React from 'react';
import './Polls.css';

const polls = (props) => {
    return (
        <div className="card poll-card mt-5 mb-5">
            <h4 className="card-header bg-primary text-white">What should we do next!?</h4>
            <div className="card-body">
                <form action="">
                <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="radio" name="next-activity"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" value="Soccer at the YMCA" disabled />
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="radio"  name="next-activity"/>
                            </div>
                        </div>
                        <input type="text" className="form-control" value="Picnic at the Commons" disabled />
                    </div>
                    <div className="input-group mb-2">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="radio" name="next-activity" />
                            </div>
                        </div>
                        <input type="text" className="form-control" value="Movies" disabled />
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <input type="radio" name="next-activity" />
                            </div>
                        </div>
                        <input type="text" className="form-control" value="Farmer's Market & Waterfront Walk" disabled />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default polls;