/*
* Authors: 
    - Jay, Gajjar
*/
import React, { Component } from 'react';
import './Home.css';

class Home extends Component {   
    render() {
        console.log(this.props.currentUser);
        console.log(localStorage.getItem('firstName'));
        
        return (
            <div>
                <div className="container bg-white pb-80">
                    {/* Header Row */}
                    <div className="row hero mb-80" style={{ backgroundImage: "url(img/home-polaroid.jpg)" }}>
                        <div className="col-md-3"></div>
                        <div className="col-md-6 p-5 hero-content">
                            <h3 className="font-weight-light font-italic text-info">Greetings, {this.props.currentUser? this.props.currentUser.firstName : ''}</h3>
                            <h1 className="display-3">Take <span className="text-primary">A Break!</span></h1>
                            <h5 className="font-weight-light"><span className="text-success">Escape</span> from the reality, and give yourself a much needed break. Find like-spirited people to enhance your travel experience!</h5>
                        </div>
                        <div className="col-md-3"></div>
                    </div>

                    {/* What We Do Row */}
                    <h2 className="display-4 text-center mb-80">What We <span className="text-pink">Provide</span></h2>
                    <div className="row mb-80">
                        <div className="col-md-6 mb-3">
                            <img className="img-fluid rounded" src={"/img/travel-agency.jpg"} alt=""/>
                        </div>
                        <div className="col-md-6 mb-3 pl-5 pr-5">
                            <div className="accordion" id="servicesAcc">
                                <div className="card">
                                    <div className="card-header" id="head1">
                                        <button className="btn btn-link btn-acc" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i className="fas fa-map-marked mr-3"></i> Explore Destinations & Events!</button>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="head1" data-parent="#servicesAcc">
                                        <div className="card-body">
                                            From our website browse through a plethora of beautiful destinations, all the major visiting points and the events happening around you!
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="head2">
                                        <button className="btn btn-link btn-acc" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"><i className="fas fa-user-plus mr-3"></i> Find Like Minded People!</button>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="head2" data-parent="#servicesAcc">
                                        <div className="card-body">
                                            Find people who have mutual interests with you, and are looking to travel around similar spots!
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="head3">
                                        <button className="btn btn-link btn-acc" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree"><i className="fas fa-users mr-3"></i> Create Groups and Meet Up!</button>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="head3" data-parent="#servicesAcc">
                                        <div className="card-body">
                                            Create groups with your friends, like-minded people, invite others! Form a community, use group polls to decide on events/places to visit! 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Meet Our Team */}
                    <h2 className="display-4 text-center mb-80">Meet <span className="text-primary">Our Team</span></h2>
                    <div className="row mb-80">
                        <div id="teamCarousel" className="carousel slide w-100" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#teamCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#teamCarousel" data-slide-to="1"></li>
                                <li data-target="#teamCarousel" data-slide-to="2"></li>
                                <li data-target="#teamCarousel" data-slide-to="3"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="card team-card">
                                        <img className="rounded-circle" src={"/img/abhinav.jpeg"} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Abhinav Mandava</h5>
                                            <hr/>
                                            <p className="card-text"><i className="fas fa-laptop-code"></i> Full Stack Developer</p>
                                            <p className="card-text"><i className="fas fa-map-pin"></i> Halifax, NS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card team-card">
                                        <img className="card-img-top rounded-circle" src={"/img/jay.jpeg"} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Jay Gajjar</h5>
                                            <hr/>
                                            <p className="card-text"><i className="fas fa-laptop-code"></i> Full Stack Developer</p>
                                            <p className="card-text"><i className="fas fa-map-pin"></i> Halifax, NS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card team-card">
                                        <img className="card-img-top rounded-circle" src={"/img/rajni.jpeg"} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Rajni Puni</h5>
                                            <hr/>
                                            <p className="card-text"><i className="fas fa-laptop-code"></i> Full Stack Developer</p>
                                            <p className="card-text"><i className="fas fa-map-pin"></i> Halifax, NS</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="card team-card">
                                        <img className="card-img-top rounded-circle" src={"/img/sriram.jpeg"} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Sriram Ponangi</h5>
                                            <hr/>
                                            <p className="card-text"><i className="fas fa-laptop-code"></i> Full Stack Developer</p>
                                            <p className="card-text"><i className="fas fa-map-pin"></i> Halifax, NS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Contact Us*/}
                    <h2 className="display-4 text-center mb-80"><span className="text-info">Reach Out To Us</span></h2>
                    <div className="row form-row mb-80">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <form className="border p-5 rounded">
                            <div className="row mb-2">
                                <div className="col">
                                    <label for="firstName">First Name</label>
                                    <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name"/>
                                </div>
                                <div className="col">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="userEmail">Email address</label>
                                <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="message">Your Message</label>
                                <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;