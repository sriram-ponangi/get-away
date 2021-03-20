/*
* Authors: 
    - Rajni, Puni
*/
import { Component } from 'react';
import axios from "axios";
import loading from "../loading.gif";
// import background from "/img/contact-bg.jpeg";
import './Contact.css'; 

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      isLoading: false,
      errorMessage:'',
      successMessage:''
    };

    this.txtNameHandler = this.txtNameHandler.bind(this);
    this.txtEmailHandler = this.txtEmailHandler.bind(this);
    this.txtMessageHandler = this.txtMessageHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) { 
    event.preventDefault();
    this.sendHandler();
  }

  txtNameHandler = event => {
    this.setState({name: event.target.value})
  }
  
  txtEmailHandler = event => {
    this.setState({email: event.target.value})
  }

  txtMessageHandler = event => {
    this.setState({message: event.target.value})
  };
  
  //called backend service to send email to the admin of this application
  async sendHandler() {   
    this.setState({successMessage: ""});
    if(this.state.name == ""){
      this.setState({errorMessage: "Please enter Name."});
    }
    else if(this.state.email == ""){
      this.setState({errorMessage: "Please enter Email."});
    }
    else if(this.state.message == ""){
      this.setState({errorMessage: "Please enter Message."});
    }
    else {
      this.setState({isLoading: true});
      const id = await axios.post("contactus/send",{
        name:this.state.name, 
        email:this.state.email, 
        message:this.state.message})
        .then(res => {
          this.setState({successMessage: "Your message is sent to admin. GetAway team will contact you shortly."});
          this.setState({isLoading: false});
          this.setState({errorMessage: ""});
          this.setState({name: ""});
          this.setState({email: ""});
          this.setState({message: ""}); 
          document.getElementById("fullName").value = ""; 
          document.getElementById("userEmail").value = ""; 
          document.getElementById("message").value = ""; 
          
        })
        .catch(error => {
          this.setState({errorMessage: "your message is sent to admin. GetAway team will contact you shortly."});
        });     
    }
  }
  showErrorMessage = () => {
    if (this.state.errorMessage) {
        return (
         <div className="alert alert-danger" role="alert">
           {this.state.errorMessage}
         </div>             
        );        
    } else {
        return (<div></div>);
    }
  }
  showSuccessMessage = () => {
    if (this.state.successMessage) {
        return (
         <div className="alert alert-success" role="alert">
           {this.state.successMessage}
         </div>             
        );        
    } else {
        return (<div></div>);
    }
  }
  render() {
    return (
      <section>
        <div className="contact-container container pb-80" style={{ backgroundImage: `url("/img/contact-bg.jpeg")` }}>
          <h2 className="display-4 text-center pt-5"><span className="text-pink">Contact Us</span></h2>
          <div className="row form-row mb-80 mt-5">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              {this.showErrorMessage()}
              {this.showSuccessMessage()}
              <form onSubmit={this.handleSubmit} className="contact-form">
                  <div className="form-group">
                      <label for="firstName">Full Name</label>
                      <input type="text" className="form-control" name="firstName" id="fullName" onChange={this.txtNameHandler} placeholder="First Name"/>
                    
                  </div>
                  <div className="form-group">
                      <label for="userEmail">Email address</label>
                      <input type="email" className="form-control" id="userEmail" onChange={this.txtEmailHandler} aria-describedby="emailHelp" placeholder="Enter email" />
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                      <label for="message">Your Message</label>
                      <textarea className="form-control" id="message" rows="5" onChange={this.txtMessageHandler} placeholder="Enter your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                  {this.state.isLoading?<img className="ml-1" src={loading}></img>:<div></div>}
              </form>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </section>        
    )    
  }

}

export default ContactUs;
