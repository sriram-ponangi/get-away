/*
* Authors: 
    - Sriram, Ponangi
*/
import world from '../world_travel.gif';
import { Component } from 'react';

import  './DestinationSearch.css';

class DestinationSearch extends Component {
    state = {
        counrtyName: ''
    }
    searchFormSubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state.counrtyName);
        
        this.props.history.push(
            { 
                pathname: '/destination/search/result',
                countryName: this.state.counrtyName,
                // currentUser: this.props.currentUser
            }
        );

    }
    countryNameInputChangehandler = (event) => {
        this.setState({counrtyName: event.target.value});
        console.log(this.state.counrtyName);
      }

    render() {
        
        return (
            <div className='container DestinationSearch'>
                
                <form onSubmit={this.searchFormSubmitHandler}>
                    
                    <div className="row">
                        <div className="col-sm-12 hidden-xs">
                            <h2 className="font-weight-bold text-dark" style={{ fontFamily: 'Verdana' }}>
                                Search top destinations:
                            </h2>
                        </div>
                        <div className="col-sm-11">
                            <input className="form-control form-control-lg form-control-borderless"
                                type="search" placeholder="Country Name" name="countryName" required
                                onChange={this.countryNameInputChangehandler} />
                        </div>
                        <div className="col-sm-1">
                            <button className="btn btn-lg btn-outline-dark"  type="submit">                            
                                Search
                            </button>
                        </div>
                    </div>
                </form>
                <hr/>
                <div>
                    <img className="img-fluid rounded mx-auto d-block" src={world} 
                    title="Travel The World" alt="Travel The World" />
                </div>
            </div>
        );
    }
    
}

export default DestinationSearch;
