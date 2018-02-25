import React, {Component} from 'react';
import {bubble as Menu} from 'react-burger-menu'
import './SocialIcons.css'

class SocialIcons extends Component {
    render() {
        return (
            <div id="socialIconsContainer">
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"
                      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                      crossorigin="anonymous"/>


                <div className="socialIconsWrapper">
                    <ul>
                        <li className="facebook"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                        <li className="twitter"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
                        <li className="instagram"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                        <li className="google"><i className="fa fa-google fa-2x" aria-hidden="true"></i></li>
                        <li className="whatsapp"><i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>)
    }
}

export default SocialIcons