
import './DestinationDetails.css';
import { Component } from 'react';

import DestinationDetailsCard from '../DestinationDetailsCard/DestinationDetailsCard';


import { NavLink, BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

class DestinationDetails extends Component {
    state = {
        destinationDetails: {
            carouselImages: []
        }
    }

    componentDidMount() {
        fetch('/mock-data/destinationDetails.json')
            .then(res => res.json())
            .then((data) => {

                this.setState({ destinationDetails: data });
                console.log(this.state);
            })
            .catch(console.log)
    }

    showHighlights = () => {
        return (
            <NavLink className=" btn btn-outline-light text-dark" onClick={this.highlightsRedirect}
            to={"/"} style={{ fontFamily: 'Verdana' }}><b>Highlights</b></NavLink>
        );
    }

    highlightsRedirect = () => {

        this.props.history.push(
            { 
                pathname: '/'
                // countryName: this.state.counrtyName
            }
        );
       
    }

    render() {

        if (this.props.location.destinationId != undefined) {



            return (
                <div className='container DestinationDetails'>
                    <h1 className="font-weight-bold text-dark" style={{ fontFamily: 'Verdana' }}>
                        {this.state.destinationDetails.title} (Card: {this.props.location.destinationId} )
                    </h1>
                    {
                        this.state.destinationDetails.carouselImages.map((result) => (
                            <div key={result.id}>
                                <img className="img-fluid" src={result.image}
                                    title={result.title} alt={result.title} />
                            </div>
                        ))
                    }


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
                                            to="/destination/details/documents" activeClassName="active">Documents</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link text-light" id='destination-details-accomodations-nav'
                                            to="/destination/details/accomodations" activeClassName="active">Accomodations</NavLink>
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
                            component={() => <DestinationDetailsCard displayContent={this.state.destinationDetails.documents} />} />
                        <Route path="/destination/details/accomodations" exact
                            component={() => <DestinationDetailsCard displayContent={this.state.destinationDetails.accomodations} />} />
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