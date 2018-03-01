import React, {Component} from 'react';
import './About.css'
import AboutHero from "./AboutHero";
import ThingsWeDo from "./ThingsWeDo";


class About extends Component {
    render() {
        return (
            <div>
            <AboutHero/>
              <ThingsWeDo/>
            </div>
        )
    }
}

export default About;