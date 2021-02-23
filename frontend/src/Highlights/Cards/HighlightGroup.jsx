import React, { Component } from 'react';
import './Highlight.css'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { highlightsData } from './HighlightsData.js'
import  HDetails  from '../Modals/HDetails.js'

class HighlightGroup extends Component {
    state = {
        // category: this.props.data.fishing[0].title,
        // cardTitles: [this.props.data.fishing[0].title, this.props.data.fishing[1].title, this.props.data.fishing[2].title],
        // cardImages: [this.props.data.fishing[0].imSrc, this.props.data.fishing[1].imSrc, this.props.data.fishing[2].imSrc]
    }
    render() {
        return (
            <div className='container-fluid h-group'>
                <h1 className="highlight-title" > {this.props.hTitle} </h1>
                <div className="card-deck">
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="card h-card">
                                <img className="card-img-top img-single" src={this.props.data[0].imSrc} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.data[0].title}</h5>
                                    <p className="card-text">{this.props.data[0].title} {this.props.data[0].text}</p>
                                    <HDetails imSrc={this.props.data[0].imSrc} desc={this.props.data[0].desc} title={this.props.data[0].title}></HDetails>
                                    {/* <a href="#" className="btn btn-primary">Add to Wishlist</a> */}
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="card h-card">
                                <img className="card-img-top img-single" src={this.props.data[1].imSrc} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.data[1].title}</h5>
                                    <p className="card-text">{this.props.data[1].title} {this.props.data[1].text}</p>
                                    <HDetails imSrc={this.props.data[1].imSrc} desc={this.props.data[1].desc} title={this.props.data[1].title}></HDetails>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="card h-card">
                                <img className="card-img-top img-single" src={this.props.data[2].imSrc} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.data[2].title}</h5>
                                    <p className="card-text">{this.props.data[2].title} {this.props.data[0].text}</p>
                                    <HDetails imSrc={this.props.data[2].imSrc} desc={this.props.data[2].desc} title={this.props.data[2].title}></HDetails>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );

    }
}

export default HighlightGroup;