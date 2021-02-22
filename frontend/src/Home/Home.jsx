// import axios from 'axios';
import React, { Component } from 'react';

class Home extends Component {   
    render() {
        console.log(this.props.currentUser);
        console.log(localStorage.getItem('firstName'));
        
        return (
            <div align='center'>
                <h2>Welcome {this.props.currentUser? this.props.currentUser.firstName : ''}</h2>
            </div>
        );
    }
}

export default Home;