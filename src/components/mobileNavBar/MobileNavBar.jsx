import React, {Component} from 'react';
import './MobileNavBar.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
    faHome,
    faImages,
    faRssSquare,
    faAddressCard

} from '@fortawesome/fontawesome-free-solid'

import {Link} from "react-router-dom";
const iconSize = '2x';


class MobileNavBar extends Component {
    render() {
        return (
            <div>
                <nav className={'mobileNavBar'}>
                    <Link to="/" className="NavBarActive"><FontAwesomeIcon icon={faHome} size={iconSize}/></Link>
                    <Link to="/cases"><FontAwesomeIcon icon={faImages} size={iconSize}/></Link>
                    <Link to="/about"><FontAwesomeIcon icon={faAddressCard} size={iconSize}/></Link>
                    <a href="https://medium.com/ab-it"><FontAwesomeIcon icon={faRssSquare} size={iconSize}/></a>
                </nav>
            </div>
        )
    }
}

export default MobileNavBar
