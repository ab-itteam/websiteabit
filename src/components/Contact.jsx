import React, {Component} from 'react';
import './Contact.css';
import ContactButton from "./ContactButton";
import SocialIcons from "./SocialIcons";


class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="reachOut">
                <div className="reachOutTitle">
                    <h1><em>Reach Out</em> to us</h1>
                </div>
                <div className="reachOutButtons">
                    <h2>Traditional</h2>
                    <ContactButton/>
                    <ContactButton/>
                </div>
                <div className="reachOutSocialMedia">
                    <h2> Social Media </h2>
                    <SocialIcons/>
                </div>
            </div>
        )
    }
}

export default Contact