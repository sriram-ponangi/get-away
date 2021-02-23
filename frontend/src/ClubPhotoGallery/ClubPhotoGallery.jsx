import { Component } from 'react';
import "./ClubPhotoGallery.css"

class ClubPhotoGallery extends Component {
  state = {
      topdestinationsList: []
  }
  
  render() {
    return (
      <section class="gallery-block cards-gallery">
        <div class="container">
          
          <div class="heading">
            <h2>Group A Gallery</h2>
            <span className="comment-text-sm sub-group-heading"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  </span>
          </div>
          <div class="comment-heading border border-right-0  border-top-0  border-left-0">
            <h2>Upload Images</h2>
          </div>
          <div class="row btndivUploadImage">
          
          <input type="file"  id="customFile" />
          </div>
          
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="card border-0 transform-on-hover">
                <a class="lightbox" href="/clubImages/club1.jpg" >
                  <img src="/clubImages/club1.jpg" 
                  class="card-img-top groupimg"  alt="" />
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card border-0 transform-on-hover">
                <a class="lightbox" href="/clubImages/club2.jpg" >
                  <img src="/clubImages/club2.jpg" 
                  class="card-img-top groupimg" alt="" />
                </a>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="card border-0 transform-on-hover">
                <a class="lightbox" href="/clubImages/club3.jpg" >
                  <img src="/clubImages/club3.jpg" 
                  class="card-img-top groupimg" alt="" />
                </a>
              </div>
            </div>
            
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="card border-0 transform-on-hover">
                <a class="lightbox" href="/clubImages/club4.jpg" >
                  <img src="/clubImages/club4.jpg"  
                  class="card-img-top groupimg" alt="" />
                </a>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="card border-0 transform-on-hover">
                <a class="lightbox" href="/clubImages/club5.jpg" >
                  <img src="/clubImages/club5.jpg" 
                  class="card-img-top groupimg" alt="" />
                </a>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="card border-0 transform-on-hover">
                <a class="lightbox" href="/clubImages/club6.jpg" >
                  <img src="/clubImages/club6.jpg" 
                  class="card-img-top groupimg" alt="" />
                </a>
              </div>
            </div>
            
          </div>
          <div className="row btndivloadmore">
            <button class="btn btn-primary" variant="outline-primary">Load more</button>
            </div>
        
        
          <div class="comment-heading border border-right-0  border-top-0  border-left-0">
            <h2>Comments</h2>
          </div>
              <div class="d-flex justify-content-center row">
                  <div class="d-flex flex-column col-md-8">
                      
                      <div class="coment-bottom bg-white p-2 px-4">
                          <div class="d-flex flex-row add-comment-section mt-4 mb-4">
                            <img class="img-fluid img-responsive rounded-circle mr-2" src="/dummyCommentprofile.jpg" width="38"  alt="" />
                            <input id="txtComment" type="text" class="form-control mr-3" placeholder="Add comment" />
                          <button class="btn btn-primary" type="button" onClick={this.add} id ="btnSubmit">Comment</button>
                          </div>
                          
                          <div class="commented-section mt-2">
                              <div class="d-flex flex-row align-items-center commented-user">
                                  <h5 class="mr-2 comment-user-name">Lorem ipsum</h5><span class="dot mb-1"></span><span class="mb-1 ml-2 comment-date">4 hours ago</span>
                              </div>
                              <div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                              
                          </div>
                          <div class="commented-section mt-2">
                              <div class="d-flex flex-row align-items-center commented-user">
                                  <h5 class="mr-2 comment-user-name">Lorem ipsum</h5><span class="dot mb-1"></span><span class="mb-1 ml-2 comment-date">4 hours ago</span>
                              </div>
                              <div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                              
                          </div>
                          <div class="commented-section mt-2">
                              <div class="d-flex flex-row align-items-center commented-user">
                                  <h5 class="mr-2 comment-user-name">Lorem ipsum</h5><span class="dot mb-1"></span><span class="mb-1 ml-2 comment-date">4 hours ago</span>
                              </div>
                              <div class="comment-text-sm"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                              
                          </div>
                          
                      </div>
                  </div>
              </div>
          </div>
        </section>        
    )    
  }

}

export default ClubPhotoGallery;
