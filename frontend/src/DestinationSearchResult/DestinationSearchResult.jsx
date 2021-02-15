import { Component } from 'react';
import DestinationSearchResultCard from '../DestinationSearchResultCard/DestinationSearchResultCard';



class DestinationSearchResult extends Component {
    state = {
        topdestinationsList: []
    }
    componentDidMount(){        
        fetch('/mock-data/topdestinationsList.json')
        .then(res => res.json())
        .then((data) => {
            this.setState({topdestinationsList: data});
        })
        .catch(console.log)        
    }

    
    render() {
        
        return (
            <div className="container">                
                <h2 className="font-weight-bold text-dark" style={{ fontFamily: 'Verdana' }}>
                    Showing results for: {this.props.location.countryName}
                </h2>
                <hr />
                <div className="row">
                    {
                        this.state.topdestinationsList.map( (result) => (                            
                            <div className="col-md-4">                                
                                <DestinationSearchResultCard
                                    image={result.image}
                                    title={result.title}
                                    text={result.text}
                                    destinationId={result.id}
                                />
                            </div>
                        ))
                    }
                </div>
            </div> 
        );
    }
    
}

export default DestinationSearchResult;
