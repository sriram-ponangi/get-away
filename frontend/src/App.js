
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
            <Route path="/destination/details/about" exact component={DestinationDetails} />
<<<<<<< HEAD
            <Route path="/my-groups/halifax-hustle" exact component={GroupSingle} />
            
=======
            <Route path="/destination/highlights" exact component={Highlights} />
>>>>>>> 5ff8fc6e8d42ac6046d0e250556361181d60bf5f
          
        </BrowserRouter>
      </div>

    );
  }
}

export default App;