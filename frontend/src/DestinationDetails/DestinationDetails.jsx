
import './DestinationDetails.css';
import { Component } from 'react';

import DestinationDetailsCard from '../DestinationDetailsCard/DestinationDetailsCard';
import axios from 'axios';

import { NavLink, BrowserRouter, Route, Redirect } from 'react-router-dom';

class DestinationDetails extends Component {
    state = {
        destinationDetails: {
            carouselImages: []
        }
    }

    componentDidMount() {
        // fetch('/mock-data/destinationDetails.json')
        //     .then(res => res.json())
        //     .then((data) => {

        //         this.setState({ destinationDetails: data });
        //         console.log(this.state);
        //     })
        //     .catch(console.log)
        axios.get('destination/details', {
            params: {
                destinationId: this.props.location.destinationId
            }
        }).then(
            res => {
                this.setState({ destinationDetails: res.data });
            },
            error => {
                console.log(error);
            }
        );
    }

    showHighlights = () => {

        if (localStorage.getItem('firstName')) {
            return (
                <NavLink className=" btn btn-outline-light text-dark" onClick={this.highlightsRedirect}
                    to={"/"} style={{ fontFamily: 'Verdana' }}><b>Highlights</b></NavLink>
            );
        }

    }


    highlightsRedirect = () => {

        this.props.history.push(
            {
                pathname: '/destination/highlights'
                // countryName: this.state.counrtyName
            }
        );

    }

    render() {

        if (this.props.location.destinationId !== undefined) {



            return (
                <div className='container DestinationDetails'>
                    <h1 className="font-weight-bold text-dark" style={{ fontFamily: 'Verdana' }}>
                        {this.state.destinationDetails.title} {this.state.destinationDetails.name}
                    </h1>
                    {/* {
                        this.state.destinationDetails.carouselImages.map((result) => (
                            <div key={result.id}>
                                <img className="img-fluid" src={result.image}
                                    title={result.title} alt={result.title} />
                            </div>
                        ))
                    } */}

                    <div>
                        <img className="img-fluid" src={this.state.destinationDetails.imageSource}
                            title={this.state.destinationDetails.name} alt={this.state.destinationDetails.name} />
                    </div>


                    <BrowserRouter>
                        <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{ background: 'black' }}>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarDestinationDetails"
                                aria-controls="navbarDestinationDetails" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarDestinationDetails">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-light" id='destination-details-about-nav'
                                            to="/destination/details/about" activeClassName="active">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-light" id='destination-details-documents-nav'
                                            to="/destination/details/documents" activeClassName="active">Tourist Attractions</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-light" id='destination-details-accomodations-nav'
                                            to="/destination/details/accomodations" activeClassName="active">Essentials</NavLink>
                                    </li>
                                </ul>
                                {
                                    this.showHighlights()
                                }

                            </div>
                        </nav>


                        <br />
                        <Route path="/destination/details/about" exact
                            component={() => <DestinationDetailsCard displayContent={this.state.destinationDetails.about} />} />
                        <Route path="/destination/details/documents" exact
                            component={() => <DestinationDetailsCard displayContent={this.state.destinationDetails.touristAttractions} />} />
                        <Route path="/destination/details/accomodations" exact
                            component={() => <DestinationDetailsCard displayContent={this.state.destinationDetails.essentials} />} />
                        <br /><hr /><br />
                    </BrowserRouter>


                </div>
            );
        }
        else {
            return (
                <Redirect to={"/destination/search"} />
            )
        }
    }

}

export default DestinationDetails;