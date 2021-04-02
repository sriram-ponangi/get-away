/*
* Authors: 
    - Mandava, Abhinav,
    - Gajjar, Jay (Enhancements)
*/

import React, { Component } from 'react';
import DateTimePicker from '../DateTime/DateTimePicker.js';
import './Hdetails.css'


class HDetails extends Component {
 
    validateDate = () => {
        let date = document.getElementById()
    }

    render() {
        return (
            < div className="modal fade" id="hdetails" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"  >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="image-modal" src={this.props.imSrc} ></img>
                            <p>{this.props.desc}</p>
                        </div>
                        <div className="modal-footer">
                                <DateTimePicker category={this.props.cat} title={this.props.title} loc_id={this.props.id}></DateTimePicker>
                        </div>
                    </div>
                </div>
            </div >
        );

    }
}

export default HDetails;
