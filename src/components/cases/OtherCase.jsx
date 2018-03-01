import React, {Component} from 'react';
import './OtherCase.css'

class OtherCase extends Component {
    render() {
        return (
            <div className="otherCase">
                <a href={this.props.data.url} target="_blank"><img src={this.props.data.image}/></a>
                <h2>{this.props.data.title}</h2>
                <p>
                    {this.props.data.text}
                </p>
                <p>
                    {this.props.data.conclusion}
                </p>
                {this.props.data.externalUrls.map((link, i) => <div><a href={link.url} key={i}>{link.text}</a> <br/></div>)}
            </div>
        )}}
        export default OtherCase;
