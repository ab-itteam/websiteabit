import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';
import Home from "./components/Home";
import Cases from "./components/cases/Cases";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Guy from "./components/Guy";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Policy from "./components/privacy/Policy";

const history = createHistory();


ReactGA.initialize('UA-35827919-7');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

    render() {
        return (

            <Router>
                <div>
                    <NavBar/>
                    <div className="App">
                        <Route exact path="/" component={Home}/>
                        <Route path="/cases" component={Cases}/>
                        <Route path="/about" component={About}/>
                        <Route path="/guy" component={Guy}/>
                        <Route path="/privacy" component={Policy}/>
                    </div>
                    <Footer/>
                </div>
            </Router>

        );
    }
}

export default App;
