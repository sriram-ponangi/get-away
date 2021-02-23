import React, { Component } from 'react';
import './Hdetails.css'

class HDetails extends Component {
    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                    View
</button>


                <div class="modal fade" id="exampleModalCenter" tabindex="-10" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <img className="img-single" src={this.props.imSrc} ></img>
                                <p>{this.props.desc}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default HDetails;
