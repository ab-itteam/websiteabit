import React, {Component} from 'react';
import './SocialIcons.css'

class SocialIcons extends Component {
    render() {
        return (
            <div id="socialIconsContainer">
                <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"/>


                <div className="socialIconsWrapper">
                    <ul>
                        <li className="facebook"><i className="fab fa-facebook fa-2x" aria-hidden="true"></i></li>
                        <li className="twitter"><i className="fab fa-twitter fa-2x" aria-hidden="true"></i></li>
                        <li className="google"><i className="fab fa-google fa-2x" aria-hidden="true"></i></li>

                        <li className="medium"><i className="fab fa-medium-m fa-2x" aria-hidden="true"></i></li>
                        <li className="telegram"><i className="fab fa-telegram fa-2x" aria-hidden="true"></i></li>
                        <li className="discord"><i className="fab fa-discord fa-2x" aria-hidden="true"></i></li>
                        <li className="slack"><i className="fab fa-slack-hash fa-2x" aria-hidden="true"></i></li>
                        <li className="github"><i className="fab fa-github fa-2x" aria-hidden="true"></i></li>

                        <a href = "https://api.whatsapp.com/send?phone=+40725238232&text=contact%20from%20website">
                            <li className="whatsapp"><i className="fab fa-whatsapp fa-2x" aria-hidden="true"/></li>
                        </a>
                    </ul>
                </div>
            </div>)
    }
}

export default SocialIcons