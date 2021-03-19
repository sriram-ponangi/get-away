/*
* Authors: 
    - Sriram, Ponangi
*/

import { Component } from 'react';
import './DestinationDetailsCard.css';

class DestinationDetailsCard extends Component {

    render() {
        console.log('displayContent');
        console.log(this.props.displayContent);
        if (this.props.displayContent && this.props.displayContent.length > 0) {
            return (
                <div className="mx-1 DestinationDetailsCard">
                    {

                        this.props.displayContent.map((result) => (

                            <div className="card mb-4">
                                <div class="card-header">
                                    <h3 className="font-weight-bold text-dark" style={{ fontFamily: 'Verdana' }}>
                                        {result.title}
                                    </h3>
                                </div>
                                <div class="card-body">
                                    {
                                        result.paragraphs.map((para) => (
                                            <p className=" text-dark" style={{ fontFamily: 'Verdana' }}>
                                                {para}
                                            </p>
                                        ))
                                    }
                                </div>
                            </div>

                        ))

                    }
                </div>
            );
        }
        else {
            return (
                <div className="mx-1 DestinationDetailsCard">
                    <h2>Sorry!</h2>
                    <p> No information available yet. Please vist this page at later date.</p>
                </div>
            );
        }

    }

}

export default DestinationDetailsCard;
