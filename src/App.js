import React, {Component} from 'react';
import logo from './logo.svg';
import Hero from './components/Hero'
import './App.css';
import Services from "./components/Services";
import Who from "./components/Who";
import MenuComp from "./components/MenuComp";
import ContactButton from "./components/ContactButton";
import SocialIcons from "./components/SocialIcons";
import Contact from "./components/Contact";
import Quote from "./components/Quote";
import CurlyBrace from "./components/CurlyBrace";
import ScrollDown from "./components/ScrollDown";
import Badge from "./components/Badge";
import HighlightedProject from "./components/HighlightedProject";


const contact = {"contact":{
    "header":"Contact",
        "mailAddress":"your mail",
        "message":"your message",
        "sendMessage":"Mail send",
        "sendButton":"Send message"
}}
class App extends Component {

    render() {
        return (
            <div className="App">
                <MenuComp/>
                <Hero></Hero>
                <ScrollDown/>
                <Services/>
                <CurlyBrace data={{inverted:false}}/>
                <Who></Who>
                <CurlyBrace data={{inverted:true}}/>
                <Contact/>
                <HighlightedProject/>
                <Quote/>
                <Badge/>
            </div>
        );
    }
}

export default App;
