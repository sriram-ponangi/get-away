/*
* Authors: 
    - Rajni, Puni
*/
import { Component } from 'react';
//import "./GroupComments.css";
import axios from "axios";
import loading from "../loading.gif"


class GroupComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postedComment: '',
      comments: [],
      isLoading: false,
      errorMessage:'',
      groupId: this.props.groupId
    };

    this.txtCommentHandler = this.txtCommentHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    this.getComments();
  }

  handleSubmit(event) { 
    //alert('handleSubmit');
    event.preventDefault();
    this.setState({isLoading: true});
    this.submitCommentHandler();
    this.setState({isLoading: false});
  }

  txtCommentHandler = event => {
    //alert('txtCommentHandler');
    this.setState({postedComment: event.target.value})
  }  
  
  async submitCommentHandler() {
    const txtCommentval = this.state.postedComment;
   // alert(txtCommentval);
    if(txtCommentval == ""){
      this.setState({errorMessage: "Please enter some comment."});
    }
    else {
      this.setState({isLoading: true});
      await axios.post('group/comment', {groupId:this.state.groupId,text:txtCommentval})
      .then(res => {
          console.log(res);
          this.setState({
              successMessage: res.data.message,
              errorMessage: ""
          });
          this.getComments();   
          this.setState({postedComment:""});
          this.setState({isLoading: false});
      }).catch(error => {
          this.setState({errorMessage: "Error posting comments"});
      });
        
      
    }   
  }

  async getComments(){
    await axios.get('group/comment', {
      params: {
        groupId: this.state.groupId
      }
    })
    .then(
      res => {
        this.setState({ comments: res.data.comments });
      },
      error => {
          console.log(error);
      });
  }

  formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
  }

  showMessage = () => {
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


  render() {
    return (
      <section>
        <div className="container bg-white pb-80">
        <div className="border border-right-0  border-top-0  border-left-0">
        <h3 className="display-5 mb-10"><span className="text-primary"> Comments</span></h3>
        </div>
              <div class="d-flex justify-content-center row">
                  <div class="d-flex flex-column col-md-8">
                      
                      <div class="mt-5">
                          {this.showMessage()}
                            
                            
                            <form onSubmit={this.handleSubmit}>
                            <div class="form-row ml-2">
                              <div class="form-group col-md-1">
                              <img class="img-fluid img-responsive rounded-circle" src="/dummyCommentprofile.jpg" width="40"  alt="" />
                              </div>
                              <div class="form-group col-md-9">
                              <input id="txtComment" value={this.state.postedComment} type="text" class="form-control" 
                                  placeholder="Add comment"  onChange={this.txtCommentHandler} />
                              </div>
                              <div class="form-group col-md-2">
                              <button class="btn btn-primary">Send</button>
                              {this.state.isLoading?<img className="ml-1" src={loading}></img>:<div></div>}
                              </div>
                              
                              </div>
                            </form>
                            <div class="mb-4 mt-4">
                              {this.state.comments==''?<div className="text-center">No comments</div>:<div></div>}
                          {this.state.comments
                          .map((comments)=>(
                            
                          <div class="mb-3 ">
                            <div class="form-row ml-1">
                            <div class="col-md-9 pb-0 pl-0 pl-4"><h5 class="text-pink">{comments.userId.firstName}</h5></div>
                            
                            <div class="col-md-3 pb-0 mt-1"><h6 class="text-primary">{this.formatDate(comments.createdDate)}</h6></div>
                              </div>
                              <div class="form-row ml-1 pr-4 pl-4"><p class="mb-0">{comments.text}</p></div>
                              
                          </div>
                          ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>        
    )    
  }

}

export default GroupComments;
