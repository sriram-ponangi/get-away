/*
* Authors: 
    - Rajni, Puni
    - Jay, Gajjar
*/
import { Component } from 'react';
import "./GroupPhotoGallery.css";
import axios from "axios";
import loading from "../loading.gif"

class GroupPhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      selectedFile: '',
      groupName: '',
      description: '',
      isLoading: false,
      errorMessage: ''
    };

    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //get all the images in photo gallery on page load
  componentWillMount(){
    this.getphotos();     
  }

  //Called on click of submit button od upload images
  handleSubmit(event) { 
    event.preventDefault();
    if (this.state.selectedFile!=""){
      this.setState({
        errorMessage: ""                    
      });
      this.fileUploadHandler();}
    else{
      this.setState({
        errorMessage: "Please select a photo to upload."                    
    });
    }
  }

  //post call to backend to save the image
  async getphotos(){
    let gid = this.props.match.params.id;
    await axios.get('group/photos', {
      params: {
        groupId: gid

      }
    })
    .then(
      res => {
        this.setState({ photos: res.data.photos });
        this.setState({ groupName: res.data.name });
        this.setState({ description: res.data.description });
        console.log(res.data);
      })
      .catch(error => {
        console.log(error.body);
        this.setState({
            errorMessage: "Error getting photos."                    
        });
      })
  }

  fileSelectedHandler = event => {
    this.setState({selectedFile: event.target.files[0]})
    
  }  
  
  async fileUploadHandler() {
    let gid = this.props.match.params.id;
    this.setState({isLoading: true});
    const fd = new FormData();
    fd.append('groupPhotos',this.state.selectedFile)
    fd.append('groupId',gid)
    
    await axios.post("group/photos",fd)
      .then( res=>{
        this.getphotos();    
        document.getElementById("myFile").value = ""; 
        this.setState({errorMessage:""})
        this.setState({selectedFile:""})
      })
      .catch(error => {
        console.log(error.body);
        this.setState({
            errorMessage: "Error uploading photos."                    
      });
    });
        
    this.setState({isLoading: false});
  }
  
  //show error messages
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

  noPhotosUploadedDisplay = ()=>{
    if (this.state.photos==''){
      return(
        <div className="row mt-5"><h3 className="text-center w-100">No photos uploaded.</h3></div>
      )
    }
  }

  render() {
    return (
      <section>
        <div className="container bg-white pb-80">
          <h2 className="display-4 text-center pt-5"><span className="text-pink">{this.state.groupName}</span></h2>
          <div className="card-body text-center"> {this.state.description}</div>
          
          <div className="border border-right-0  border-top-0  border-left-0">
          <h3 className="display-5 mb-10"><span className="text-primary"> Upload photos</span></h3>
          </div>

          <div className="row mt-4 mb-5">
          <div className="col-sm-4"></div>
          <div className="col-sm-5">
          {
            this.showMessage()
          }
            <form className="form-signin" onSubmit={this.handleSubmit}>
              <input type="file" id="myFile"  name="customFile" onChange={this.fileSelectedHandler} />
              <button className="btn btn-primary" variant="outline-primary" >Submit</button> 
              {this.state.isLoading?<img className="ml-4" src={loading}></img>:<div></div>}            
            </form>
          </div>
          <div className="col-sm-2"></div>
          </div>
          {this.noPhotosUploadedDisplay()}
          <div className="row text-center text-lg-left">
            {
            this.state.photos.map((photo)=>(
              <div className="col-lg-3 col-md-4 col-6" id={photo._id}>
                <a className="d-block mb-4 h-100" href={`https://csci-5709-backend.herokuapp.com/${photo.imageSource}`} >
                  <img src={`https://csci-5709-backend.herokuapp.com/${photo.imageSource}`}
                  className="img-fluid thumbnail transform-on-hover"  alt="" />
                </a>
              </div>
            ))}
          </div>
          </div>
        </section>        
    )    
  }
}

export default GroupPhotoGallery;


