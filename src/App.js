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
                        <Route path="/hero" component={Hero}/>
                        <Route path="/guy" component={Guy}/>
                    </div>
                </div>
            </Router>

        );
    }
}

export default App;
