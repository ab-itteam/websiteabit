import {Component} from "react";
import Guy from "./Guy";
import React from "react";

class Who extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
                <h2> Knowledge & experience </h2>
                <Guy/>
                <h3>Nick Meiremans</h3>
                <p> Passionate & driven software developer</p>
            </div>
        )
    }
}

export default Who