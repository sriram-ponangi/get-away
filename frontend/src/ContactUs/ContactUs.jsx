import { Component } from 'react';
import axios from "axios";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
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
  
  async sendHandler() {   
    if(this.state.name == ""){
      alert("Please enter Name.");
    }
    else if(this.state.email == ""){
      alert("Please enter Email.");
    }
    else if(this.state.message == ""){
      alert("Please enter Message.");
    }
    else {
      const id = await axios.post("contactus/send",
                                      {name:this.state.name, email:this.state.email, message:this.state.message});
      alert("your message is sent to admin. GetAway team will contact you shortly.");  
    }
  }
  
  render() {
    return (
      <section class="">
        <div class="container mt-5">
          <div class="row">
            <div class="col-sm">
              <h3>Contact Us</h3>
              <small class="text-height-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</small>
              <form className="form-signin" onSubmit={this.handleSubmit}>
              <div class="mt-4">
                <div class="row">
                  <div class="col-sm">
                    Name:
                    <div class="col-mt-1"><input class="form-control"  onChange={this.txtNameHandler} placeholder="Name"></input></div>
                  </div>
                  <div class="col-sm">
                    Email:
                    <div class="col-mt-1"><input type="email" class="form-control"  onChange={this.txtEmailHandler} placeholder="name@example.com"></input></div>
                  </div>  
                </div>
                <div class="row mt-3">
                  <div class="col-sm">
                    Message:
                    <div class="col-mt-1"><textarea class="form-control"  onChange={this.txtMessageHandler} rows="3"></textarea></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm mt-2 float-right">
                  <button type="submit" class="btn btn-primary float-right">Send</button>
                  </div>
                </div>
              </div>
              </form>
            </div>
            <div class="col-sm ml-4">
              <div class="p-3 mb-2 bg-light text-dark">
                <div class="mt-2 ml-4">
                <div class="col-sm">
                    <h6>Email:</h6>
                    <div class="col-mt-1"><p>lorem@ipsum.com</p></div>
                  </div>
                  <div class="col-sm mt-4">
                    <h6>Telephone:</h6>
                    <div class="col-mt-1">123 456 7890</div>
                  </div> 
                  <div class="col-sm mt-4">
                    <h6>Address:</h6>
                    <div class="col-mt-1">Lorem Ipsum</div>
                    <div class="col-mt-1">Lorem Ipsum</div>
                    <div class="col-mt-1">Lorem</div>
                  </div>  
                  <div class="col-sm mt-4">
                    <img src="/facebook.ico"></img>
                    <img class="ml-2" src="/instagram.ico"></img>
                    <img class="ml-2" src="/twitter.ico"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
        </section>        
    )    
  }

}

export default ContactUs;
