/*
* Authors: 
    - Mandava, Abhinav
*/


import React, { Component } from 'react';
import './Highlight.css'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'


class Highlight extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="card" >
                            <img className="card-img-top img-single" src={this.props.imSrc} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.title} is an amazing place to find salmon, catfish, king fish.</p>
                                <a href="#" className="btn btn-primary">Add to Wishlist</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default Highlight;
