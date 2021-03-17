import { Component } from 'react';
import "./GroupPhotoGallery.css";
import axios from "axios";

class GroupPhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedFile: '',
      groupName: '',
      description: ''
    };

    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount(){
    this.getphotos();     
  }

  handleSubmit(event) { 
    event.preventDefault();
    this.fileUploadHandler();
  }
  async getphotos(){
    await axios.get('group/photos', {
      params: {
        groupId: '604a7bfc7d497d9bc813b607'
      }
    })
    .then(
      res => {
        this.setState({ photos: res.data.photos });
        this.setState({ groupName: res.data.name });
        this.setState({ description: res.data.description });
        console.log(res.data);
      },
      error => {
          console.log(error);
      });
  }

  fileSelectedHandler = event => {
    this.setState({selectedFile: event.target.files[0]})
  }  
  
  async fileUploadHandler() {
    const fd = new FormData();
    fd.append('groupPhotos',this.state.selectedFile)
    fd.append('groupId',"604a7bfc7d497d9bc813b607")
    const id = await axios.post("group/photos",fd);
    alert("Photo submitted Successfully")
    this.getphotos();     
  }
  
  render() {
    return (
      <section className="gallery-block cards-gallery">
        <div className="container">
          
          <div className="heading">
            <h2>{this.state.groupName}</h2>
            <span className="comment-text-sm sub-group-heading"> {this.state.description}</span>
          </div>
          <div className="comment-heading border border-right-0  border-top-0  border-left-0">
            <h2>Upload Images</h2>
          </div>
          <div className="row btndivUploadImage">
          <form className="form-signin" onSubmit={this.handleSubmit}>
          <input type="file"  name="customFile" onChange={this.fileSelectedHandler} />
          <button className="btn btn-primary" variant="outline-primary" >Submit</button> 
          </form>
          </div>
          
          <div className="row">
            {this.state.photos.map((photo)=>(
            
            <div className="col-md-6 col-lg-4" id={photo._id} >
              <b></b>
              <div className="card border-0 transform-on-hover">
                <a className="lightbox" href={`http://localhost:4000/${photo.imageSource}`} >
                
                  <img src={`http://localhost:4000/${photo.imageSource}`}
                  className="card-img-top groupimg"  alt="" />
                </a>
              </div>
            </div>            
            ))}
           
          </div>

          </div>
        </section>        
    )    
  }

}

export default GroupPhotoGallery;


