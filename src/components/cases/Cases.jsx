import React, {Component} from 'react';
import CasesHero from "./CasesHero";
import FeaturedCase from "./FeaturedCase";
import OtherCase from "./OtherCase";

import './Cases.css'

class Cases extends Component {
    render() {
        return (
            <div>
                <CasesHero/>
                <div className="casesBody">
                    <div className="featuredCases">
                        <FeaturedCase/>
                        <FeaturedCase/>
                    </div>
                </div>
                <div className="otherCases">
                    <OtherCase/>
                    <OtherCase/>
                    <OtherCase/>
                    <OtherCase/>
                </div>
            </div>
        )
    }
}

export default Cases

