/*
* Authors: 
    - Sriram, Ponangi
    - Jay Gajjar
    - Rajni Puni
    - Abhinav Mandava
*/
import './App.css';


import ProfileTemplate from './ProfileTemplate/ProfileTemplate';
import EditProfile from './EditProfile/EditProfile';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import DestinationSearch from './DestinationSearch/DestinationSearch';
import DestinationSearchResult from './DestinationSearchResult/DestinationSearchResult';
import DestinationDetails from './DestinationDetails/DestinationDetails';
import GroupSingle from './GroupSingle/GroupSingle';
import Home from './Home/Home';
import GroupPhotoGallery from './GroupPhotoGallery/GroupPhotoGallery';
import GroupComments from './GroupComments/GroupComments';
import contactus from './ContactUs/ContactUs';
import aboutus from './AboutUs/AboutUs';
import whyus from './WhyUs/WhyUs';

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Highlights from './Highlights/Highlights';
// import $ from 'jquery';
// import Popper from 'popper.js';


class App extends Component {
  state = {
    currentUser: undefined
  };

  componentDidMount = () => {
    axios.get('user').then(
      res => {        
        this.setCurrentUser(res.data);
      },
      error => {        
        console.log(error);
      }
    );
  };

  setCurrentUser = (currentUser) => {
    
    this.setState({
      currentUser: currentUser
    });
  };

  render() {
    return (

      <div className="App">
        <BrowserRouter>
          <NavBar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
          
            <Route path="/profile/login" exact component={() => <ProfileTemplate setCurrentUser={this.setCurrentUser}/>} />
            <Route path="/profile/register" exact component={ProfileTemplate} />
            <Route path="/profile/forgotPassword" exact component={ProfileTemplate} />
            <Route path="/profile/edit" exact component={() => <EditProfile currentUser={this.state.currentUser} />} />
            {/* <br /> */}
            <Route path="/" exact component={() => <Home currentUser={this.state.currentUser} />} />
            <Route path="/destination/search" exact component={DestinationSearch} />            
            <Route path="/destination/search/result" exact component={DestinationSearchResult} />
            <Route path="/destination/details/"  component={DestinationDetails} />
            <Route path="/groups/:_id" exact component={GroupSingle} />
            <Route path="/destination/highlights" exact component={Highlights} />
            <Route path="/groups/:id/gallery" exact component={GroupPhotoGallery} />
            <Route path="/group/comments" exact component={GroupComments} />
            <Route path="/aboutus" exact component={aboutus} />
            <Route path="/contactus" exact component={contactus} />
            <Route path="/whyus" exact component={whyus} />
            
        </BrowserRouter>
      </div>

    );
  }
}

export default App;