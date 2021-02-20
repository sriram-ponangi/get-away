
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
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" id='login-nav' to="/destination/details/about"
                                    activeClassName="active">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" id='register-nav' to="/destination/details/documents"
                                    activeClassName="active">Documents</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link text-dark" id='destination-details-nav' to="/destination/details/accomodations"
                                    activeClassName="active">Accomodations</NavLink>
                            </li>
                            {/* <ul class="nav nav-pills">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-light btn btn-outline-dark" id='destination-details-nav' to="/destination/details/accomodation"
                                        activeClassName="active">Highlights</NavLink>                                    
                                </li>
                            </ul> */}
                        </ul>

                        <br />
                        <Route path="/destination/details/about"
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