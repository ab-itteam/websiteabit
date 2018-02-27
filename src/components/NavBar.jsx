import {Component} from "react";
import React from "react";
import './NavBar.css'
import abitLogo from '../images/ab-it.svg'

class NavBar extends Component {
    state = {
        isTop:true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

    render() {
        return (
            <div>
            <nav className={this.state.isTop ? 'navbar navbar-default navbar-home navbar-fixed-top notScrolling' : 'navbar navbar-default navbar-home navbar-fixed-top scrolling'} data-scroll-header="">
                            <a href="#home" className="NavBarActive">Home</a>
                            <a href="#news">News</a>
                            <a href="#contact">Contact</a>
                            <a href="#about">About</a>
            </nav>
            </div>)
    }
}

export default NavBar;