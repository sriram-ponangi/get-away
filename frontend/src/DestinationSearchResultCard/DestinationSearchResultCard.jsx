import { Component } from 'react';
import { Link } from 'react-router-dom';
import './DestinationSearchResultCard.css';

class DestinationSearchResultCard extends Component {

    render() {
        return (
            <div className="mx-1 DestinationSearchResultCard">
                <div className="card" style={{ width: '320px' }}>
                    <img className="card-img-top" src={this.props.image} style={{ width: '100%' }} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.title}</h4>
                        <p className="card-text">{this.props.text}</p>                        
                        <Link className="btn btn-lg btn-outline-dark" to={{                            
                            pathname: '/destination/details',
                            destinationId: this.props.destinationId                            
                        }}>Read More..</Link>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default DestinationSearchResultCard;
