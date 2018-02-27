import React, {Component} from 'react';
import Hero from './components/Hero'
import './App.css';
import Services from "./components/Services";
import Who from "./components/Who";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import CurlyBrace from "./components/CurlyBrace";
import ScrollDown from "./components/ScrollDown";
import Badge from "./components/Badge";
import HighlightedProject from "./components/HighlightedProject";
import NavBar from "./components/NavBar";

class App extends Component {

    render() {
        return (
            <div className="App">
                <NavBar/>
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
        );
    }
}

export default App;
