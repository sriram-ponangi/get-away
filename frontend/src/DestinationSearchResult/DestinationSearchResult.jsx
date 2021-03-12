import { Component } from 'react';
import DestinationSearchResultCard from '../DestinationSearchResultCard/DestinationSearchResultCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class DestinationSearchResult extends Component {
    state = {
        topdestinationsList: []
    }
    componentDidMount() {
        // fetch('/mock-data/topdestinationsList.json')
        //     .then(res => res.json())
        //     .then((data) => {
        //         this.setState({ topdestinationsList: data });
        //     })
        //     .catch(console.log)


        axios.get('destination', {
            params: {
                countryName: this.props.location.countryName
            }
        }).then(
            res => {
                this.setState({ topdestinationsList: res.data });
            },
            error => {
                console.log(error);
            }
        );
    }


    render() {
        if (this.props.location.countryName !== undefined) {
            if (this.state.topdestinationsList.length > 0) {
                return (
                    <div className="container">
                        <h2 className="font-weight-bold text-dark" style={{ fontFamily: 'Verdana' }}>
                            Showing results for: {this.props.location.countryName}
                        </h2>
                        <hr />
                        <div className="row">
                            {
                                this.state.topdestinationsList.map((result) => (
                                    <div className="col-md-4">
                                        <DestinationSearchResultCard
                                            image={result.imageSource}
                                            title={result.locationName}
                                            text={result.description}
                                            destinationId={result._id}
                                        // currentUser={this.props.location.currentUser}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                );
            }else{
                return (
                    <div className="container">
                        <br/><br/>
                        <h2 className="font-weight-bold text-dark" style={{ fontFamily: 'Verdana' }}>
                            Sorry, no information available for "{this.props.location.countryName}"
                        </h2>
                        <hr />
                        
                    </div>
                );
            }
        } else {
            return (
                <Redirect to={"/destination/search"} />
            )
        }
    }

}

export default DestinationSearchResult;
