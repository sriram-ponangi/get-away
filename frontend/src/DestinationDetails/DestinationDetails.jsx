
import './DestinationDetails.css';
import { Component } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

import { NavLink, BrowserRouter, Route } from 'react-router-dom';

class DestinationDetails extends Component {
    state = {
        destinationDetails: {
            carouselImages: []
        }
    }

    componentDidMount(){        
        fetch('/mock-data/destinationDetails.json')
        .then(res => res.json())
        .then((data) => {
            
            this.setState({destinationDetails: data});
            console.log(this.state);
        })
        .catch(console.log)        
    }

    render() {
        return (
            <div className='container destination-details'>
                <h1 className="font-weight-bold text-dark" style={{ fontFamily: 'Verdana' }}>
                               {this.state.destinationDetails.title} (Card: {this.props.location.destinationId} )
                </h1>
               {                            
                    this.state.destinationDetails.carouselImages.map( (result) => (                                
                        <div  key={result.id}>
                            <img className="img-fluid" src={result.image} 
                            title={result.title}  alt={result.title} />                           
                        </div>
                    ))
                }
    
                
                <BrowserRouter>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" id='login-nav' to="/profile/login"
                                    activeClassName="active">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" id='register-nav' to="/profile/register"
                                    activeClassName="active">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-dark" id='forgot-password-nav' to="/profile/forgotPassword"
                                    activeClassName="active">Forgot Password</NavLink>
                            </li>
                        </ul>
                        <br />
                        <Route path="/destination/details/about" exact component={Login} />
                        <Route path="/destination/details/documents" exact component={Register} />
                        <Route path="/destination/details/accomodation" exact component={ForgotPassword} />
                        <br /><hr /><br />
                    </BrowserRouter>
                
    
            </div>
        );
    }
    
}

export default DestinationDetails;