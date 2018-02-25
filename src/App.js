import React, {Component} from 'react';
import logo from './logo.svg';
import Hero from './components/Hero'
import './App.css';
import Services from "./components/Services";
import Who from "./components/Who";
import MenuComp from "./components/MenuComp";
import ContactButton from "./components/ContactButton";
import SocialIcons from "./components/SocialIcons";


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
                <Services/>
                <Who></Who>
                <ContactButton/>
                <SocialIcons/>
            </div>
        );
    }
}

export default App;
