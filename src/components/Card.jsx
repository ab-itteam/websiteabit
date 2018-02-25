import React, {Component} from 'react';
import './Card.css';


class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                    <div className="card-container">
                        <div className="card">
                            <div className="front">
                                <h2 className="sub-title">{this.props.data.subTitle}</h2>
                                <h1 className="title">{this.props.data.title}</h1>
                                <img
                                    className="image"
                                    src={this.props.data.image}
                                    alt=""/>
                            </div>
                            <div className="back">
                                <h3 className="synopsis"></h3>
                                <p>{this.props.data.content}</p>
                                <div className="btn"><i className="fa fa-play"></i>Watch now</div>
                                <div className="btn secondary"><i className="fa fa-heart "></i>Add to list</div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Card