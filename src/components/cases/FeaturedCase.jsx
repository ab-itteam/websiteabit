import React, {Component} from 'react';
import './FeaturedCase.css'

class FeaturedCase extends Component {
    render() {
        return (
                <div className="featuredCase">
                    <a href={this.props.data.url} target="_blank"><img src={this.props.data.image}/></a>
                    <h2>{this.props.data.title}</h2>
                    <p>
                        {this.props.data.text}
                    </p>
                    <p>
                        {this.props.data.conclusion}
                    </p>
                </div>
                )}}
                export default FeaturedCase;
