/*
* Authors: 
    - Sriram, Ponangi
*/
import { Component } from 'react';
import DestinationSearchResultCard from '../DestinationSearchResultCard/DestinationSearchResultCard';
import './DestinationSearchResult.css';
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
                    <div className="search-result-wrapper pt-5 pb-5">
                        <div className="container">
                            <h2 className="font-weight display-4 text-dark">
                                Search Results for: <span className="text-pink">"{this.props.location.countryName}"</span>
                            </h2>
                            <hr className="mb-4 mt-3" />
                            <div className="row">
                                {
                                    this.state.topdestinationsList.map((result) => (
                                        <div className="col-md-4 mb-5">
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
