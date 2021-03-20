/*
* Authors: 
    - Sriram, Ponangi
*/
import world from '../world_travel.gif';
import { Component } from 'react';

import './DestinationSearch.css';

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
        this.setState({ counrtyName: event.target.value });
        console.log(this.state.counrtyName);
    }

    render() {

        return (
            <div className='container p-5 DestinationSearch'>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={'/img/paper-plane.png'} className="img-responsive paper-plane-dest m-auto d-inline" width="100" alt="" />
                    </div>
                    <div className="col-md-4">
                        <div className="card search-card">

                            <img className="img-fluid card-img-top" src={world}
                                title="Travel The World" alt="Travel The World" />
                            <div className="card-body">
                                <h4 className="card-title mb-3">Search Top Destinations</h4>
                                <form onSubmit={this.searchFormSubmitHandler}>
                                    <div className="row no-gutters">
                                        <input className="form-control form-control-lg no-border bg-light"
                                            type="search" placeholder="Enter Country Name" name="countryName" required
                                            onChange={this.countryNameInputChangehandler} />
                                        <br/>
                                        <button className="btn btn-primary btn-lg w-100" type="submit">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={'/img/paper-plane.png'} className="img-responsive paper-plane-dest m-auto d-inline align-bottom" width="100" alt="" />
                    </div>
                </div>
            </div>
        );
    }

}

export default DestinationSearch;
