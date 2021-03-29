/*
* Authors: 
    - Sriram, Ponangi
*/
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './DestinationSearchResultCard.css';

class DestinationSearchResultCard extends Component {

    render() {
        return (
            <div className="mx-1 DestinationSearchResultCard h-100">
                <div className="card h-100 rounded bg-transparent no-border">
                    <img className="card-img-top mb-2 rounded" width="100%" height="200" src={this.props.image} alt="" />
                    <div className="card-body bg-dark text-white rounded">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.text}</p>                        
                        <Link className="btn btn-lg btn-outline-light w-100 readmore-btn" to={{                            
                            pathname: '/destination/details/about',
                            destinationId: this.props.destinationId
                                                
                        }}>Read More..</Link>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default DestinationSearchResultCard;
