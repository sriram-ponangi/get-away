import React, { Component } from 'react';
import './Destination.css'
import HighlightGroup from '../Cards/HighlightGroup.jsx';

class Places extends Component {
    
    render() {
        console.log('Hello' + this.props.data[0].title);
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <HighlightGroup data={this.props.data}></HighlightGroup>
                    </div>
                    <div className="carousel-item">
                        <HighlightGroup data={this.props.data}></HighlightGroup>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Places;
