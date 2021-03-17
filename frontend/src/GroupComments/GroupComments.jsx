import { Component } from 'react';
import "./GroupComments.css";
import axios from "axios";

class GroupComments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postedComment: '',
      comments: []
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
    this.submitCommentHandler();
  }

  txtCommentHandler = event => {
    //alert('txtCommentHandler');
    this.setState({postedComment: event.target.value})
  }  
  
  async submitCommentHandler() {
    const txtCommentval = this.state.postedComment;
   // alert(txtCommentval);
    if(txtCommentval == ""){
      alert("Please enter some comment.");
    }
    else {
      // const id = await axios.post("http://localhost:4000/api/groupComments/addcomment",
      //                                 {groupId:'2',comment:txtCommentval,userName:'jessy'});


      await axios.post('group/comment', {groupId:'604a7bfc7d497d9bc813b607',text:txtCommentval})
      .then(res => {
          console.log(res);
          this.setState({
              successMessage: res.data.message,
              errorMessage: ""
          });
      }).catch(error => {
          alert(error.response);
      });
      //alert("Comment submitted successfully.");   
      this.getComments();   
      this.setState({postedComment:""});
    }   
  }

  async getComments(){
    await axios.get('group/comment', {
      params: {
        groupId: '604a7bfc7d497d9bc813b607'
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

  render() {
    return (
      <section class="gallery-block cards-gallery">
        <div class="container">
          
          <div class="comment-heading border border-right-0  border-top-0  border-left-0">
            <h2>Comments</h2>
          </div>
              <div class="d-flex justify-content-center row">
                  <div class="d-flex flex-column col-md-8">
                      
                      <div class="coment-bottom bg-white p-2 px-4">
                          <div class="d-flex flex-row add-comment-section mt-4 mb-4">
                            <img class="img-fluid img-responsive rounded-circle mr-2" src="/dummyCommentprofile.jpg" width="38"  alt="" />
                            
                            <form className="form-signin" onSubmit={this.handleSubmit}>
                              <input id="txtComment" value={this.state.postedComment} type="text" class="form-control mr-3" 
                                    placeholder="Add comment"  onChange={this.txtCommentHandler} />
                              <button class="btn btn-primary">Comment</button>
                            </form>
                          </div>
                          {this.state.comments
                          .map((comments)=>(
                          <div class="commented-section mt-2">
                            <b>{comments._id}</b>
                              <div class="d-flex flex-row align-items-center commented-user">
                                  <h5 class="mr-2 comment-user-name">{comments.userId.firstName}</h5>
                                  <span class="dot mb-1"></span>
                                  <span class="mb-1 ml-2 comment-date">{this.formatDate(comments.createdDate)}</span>
                              </div>
                              <div class="comment-text-sm"><span>{comments.text}</span></div>
                              
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
