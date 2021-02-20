import { Component } from 'react';
import { Link } from 'react-router-dom';
import './DestinationDetailsCard.css';

class DestinationDetailsCard extends Component {

    render() {
        console.log(this.props.displayContent);
        if (this.props.displayContent) {
            return (
                <div className="mx-1 DestinationDetailsCard">
                    {

                        this.props.displayContent.map((result) => (
                            <div>
                                <h3>
                                    {result.title}
                                </h3>
                                <p>
                                    {result.text}
                                </p>
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
