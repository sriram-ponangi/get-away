
/*
* Authors: 
    - Mandava, Abhinav
*/

import React, { Component } from 'react';
import './Highlight.css'
import HDetails from '../Modals/HDetails.js'

class HighlightGroup extends Component {
    state = {
        location: {}
    }
    render() {
        let locations = null
        if (this.props.showLocations) {
            locations = (
                <div className='container-fluid h-group'>
                    <div className="card-deck grid-container">

                        {this.props.data.map((item) => {
                            return (
                                <div className="single-item">
                                    <a data-toggle="modal" data-target="#hdetails">
                                        <div className="card h-card" data-backdrop="true" data-target="#hdetails" onClick={() => { this.setState({ location: item }) }}>
                                            <img className="card-img-top image-single" src={item['imSrc']} alt="Card image cap"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{item['title']}</h5>
                                                <p className="card-text">{item['title']} {item['text']}</p>
                                            </div>
                                        </div>
                                    </a>
                                    <HDetails cat={this.props.hTitle} imSrc={this.state.location['imSrc']} desc={this.state.location['desc']} title={this.state.location['title']} id={this.state.location['_id']}></HDetails>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )
        }
        return (
            <div>{locations}</div>
        );
    }
}

export default HighlightGroup;