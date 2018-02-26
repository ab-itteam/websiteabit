import React, { Component } from 'react';
import Card from "./Card";
import './Services.css';
import nodejsLogo from './../images/nodejs.svg'
import ethereumLogo from './../images/ethereum.svg'
import reactLogo from './../images/react.svg'

const card1 = {
    subTitle: 'Blockchain',
    title: 'Ethereum Development',
    image: ethereumLogo,
    content: 'Wheather you want to launch an ICO or a platform which uses blockchain technology. We can help you.' +
    'Moving into decentralization can be scary and the possibilities can be unclear. We can help you with what is possible and what is not' +
        'and maybe more importantly we can build it!'
};

const card2 = {
    subTitle: 'Consultancy',
    title: 'Backend Development',
    image: nodejsLogo,
    content: 'We have extensive experience with Java & NodeJs. We can make make the beating heart for your application'
};

const card3 = {
    subTitle: 'Consultancy',
    title: 'Front-End Development',
    image: 'https://cdn-images-1.medium.com/max/512/0*QKJemZKR6vA6hMAj.png',
    content: 'In the 80s people used computers with text commands, nowadays people want a nice graphical experience. We can build this for your application'
};

class Services extends Component {
    render() {
        return (
            <div className="servicesContainer">
                <Card data={card1}/>
                <Card data={card2}/>
                <Card data={card3}/>
            </div>

        )
    }
}
export default Services