import React, {Component} from 'react';
import NavBar from "./NavBar";
import Hero from "./Hero";
import ScrollDown from "./ScrollDown";
import Services from "./Services";
import CurlyBrace from "./CurlyBrace";
import Who from "./Who";
import Contact from "./Contact";
import HighlightedProject from "./HighlightedProject";
import Quote from "./Quote";
import Badge from "./Badge";


class Home extends Component {
    render() {
        return (
            <div>
                <Hero/>
                <ScrollDown/>
                <Services/>
                <CurlyBrace data={{inverted: false}}/>
                <Who/>
                <CurlyBrace data={{inverted: true}}/>
                <Contact/>
                <HighlightedProject/>
                <Quote/>
                <Badge/>
            </div>
        )
    }
}

export default Home