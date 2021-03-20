/*
* Authors: 
    - Rajni, Puni
    - Jay, Gajjar
*/
import { Component } from 'react';
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
      group_id:''
    };

    this.txtCommentHandler = this.txtCommentHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //populate comments on page load
  componentWillMount(){
    this.getComments();
  }

  componentWillReceiveProps = () =>{
    this.getComments();
  }

  handleSubmit(event) { 
    event.preventDefault();
    this.setState({isLoading: true});
    this.submitCommentHandler();
    this.setState({isLoading: false});
  }

  txtCommentHandler = event => {
    this.setState({postedComment: event.target.value})
  }  
  
  //calling backend service to submit comments
  async submitCommentHandler() {
    const txtCommentval = this.state.postedComment;
    if(txtCommentval == ""){
      this.setState({errorMessage: "Please enter some comment."});
    }
    else {
      this.setState({isLoading: true});
      await axios.post('group/comment', {groupId:this.props.group_id,text:txtCommentval})
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

  //called backend service to get comments
  async getComments(){
    axios.get('group/comment', {      
      params: {
        groupId: this.props.group_id
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
        <div className="border border-right-0  border-top-0  border-left-0">
        <h3 className="display-5 mb-10"><span className="text-primary"> Comments</span></h3>
        </div>
              <div className="row">
                  <div className="col-md-12">
                      
                      <div className="mt-5">
                          {this.showMessage()}
                            
                            
                            <form onSubmit={this.handleSubmit}>
                            <div className="form-row ml-2">
                              <div className="form-group col-md-1">
                              <img className="img-fluid img-responsive rounded-circle" src="/dummyCommentprofile.jpg" width="40"  alt="" />
                              </div>
                              <div className="form-group col-md-9">
                              <input id="txtComment" value={this.state.postedComment} type="text" className="form-control" 
                                  placeholder="Add comment"  onChange={this.txtCommentHandler} />
                              </div>
                              <div className="form-group col-md-2">
                              <button className="btn btn-primary">Send</button>
                              {this.state.isLoading?<img className="ml-1" src={loading}></img>:<div></div>}
                              </div>
                              </div>
                            </form>
                            <div className="mb-4 mt-4">
                              {this.state.comments==''?<div className="text-center">No comments</div>:<div></div>}
                          {this.state.comments
                          .map((comments)=>(
                            
                          <div className="mb-3 single-comment p-3 rounded">
                            <div className="form-row ml-1">
                            <div className="col-md-9 pb-0 pl-0 pl-4"><h5 className="text-pink">{comments.userId.firstName}</h5></div>
                            
                            <div className="col-md-3 pb-0 mt-1"><small className="text-white badge badge-info">{this.formatDate(comments.createdDate)}</small></div>
                              </div>
                              <div className="form-row ml-1 pr-4 pl-4"><p className="mb-0">{comments.text}</p></div>
                              
                          </div>
                          ))}
                          </div>
                      </div>
                  </div>
              </div>

        </section>        
    )    
  }

}

export default GroupComments;
