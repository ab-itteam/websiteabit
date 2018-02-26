import React, {Component} from 'react';
import './HighlightedProject.css';
import Phone from "./Phone";


class HighlightedProject extends Component {
    render() {
        return (
            <div className="HighlightedProjectContainer">
                <h1>A project on which we are <em>proud</em></h1>
                <Phone/>
            </div>
        )
    }
}

export default HighlightedProject
