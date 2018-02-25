import React, {Component} from 'react';
import './Guy.css';


class Guy extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div class="wrapper" onClick={ () => {window.open("https://www.linkedin.com/in/meiremans/", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')}}>

                    <div class="border-circle" id="one"></div>
                    <div class="border-circle" id="two"></div>
                    <div class="background-circle">
                        <div class="triangle-light"></div>
                        <div class="body"></div>
                        <span class="shirt-text">A</span>
                        <span class="shirt-text">B</span>
                        <span class="shirt-text">-</span>
                        <span class="shirt-text">I</span>
                        <span class="shirt-text">T</span>
                        <div class="triangle-dark"></div>
                    </div>
                    <div class="head">
                        <div class="ear" id="left"></div>
                        <div class="ear" id="right"></div>
                        <div class="hair-main">
                            <div class="sideburn" id="left"></div>
                            <div class="sideburn" id="right"></div>
                            <div class="hair-top"></div>
                        </div>
                        <div class="face">
                            <div class="hair-bottom"></div>
                            <div class="nose"></div>
                            <div class="eye-shadow" id="left">
                                <div class="eyebrow"></div>
                                <div class="eye"></div>
                            </div>
                            <div class="eye-shadow" id="right">
                                <div class="eyebrow"></div>
                                <div class="eye"></div>
                            </div>
                            <div class="mouth"></div>
                            <div class="shadow-wrapper">
                                <div class="shadow"></div>
                            </div>
                        </div>
                    </div>
                    <span class="music-note" id="one">&#9733;</span>
                    <span class="music-note" id="two">&#9733;</span>
                </div>)
    }
}

export  default Guy