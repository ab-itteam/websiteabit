import React, {Component} from 'react';
import CasesHero from "./CasesHero";
import FeaturedCase from "./FeaturedCase";
import OtherCase from "./OtherCase";

import afspraakmanagerPreview from '../../images/afspraakmanger.png';
import horsecoinPreview from '../../images/horsecoin.png';
import bbowPreview from '../../images/bbow.png';
import surplacePreview from '../../images/surplaceVZW.png';
import medibibPreview from '../../images/medibib.png';
import medibibAPPreview from '../../images/app-phone.png';
import cryoPreview from '../../images/cryo.png';
import myosotisPreview from '../../images/myosotis.png'
import bluebearPreview from '../../images/Bluebear.jpeg'



import './Cases.css'

const case1 = {
    title : "Afspraakmanagager",
    url: "https://www.afspraakmanager.be",
    image : afspraakmanagerPreview,
    text : "Appointment system created for health care institutions",
    conclusion : "works for +7 years",
    externalUrls: []
};

const case2 = {
    title : "Horsecoin ICO",
    url: "https://www.horsecoin.tech",
    image : horsecoinPreview,
    text : "Creating a website & Smart Contract code for a Crowdsale of an ICO? Sounds fun!",
    conclusion : "A perfect way to dive head first into Ethereum Smart Contract Development",
    externalUrls: []
};
const case3 = {
    title : "BBOW-APSO",
    url: "http://www.bbow-apso.be",
    image : bbowPreview,
    text : "User-based website for an association of doctors and therapists",
    conclusion : "BBOW connects doctors and therapist through our platform, let the share thoughts, opinions, ...",
    externalUrls: []
};

const case4 = {
    title : "Surplace",
    url: "http://www.surplacevzw.be/",
    image : surplacePreview,
    text : "Cyclists association with an integrated webshop",
    conclusion : "Events get announced on the site and interested people can buy tickets straight from the site",
    externalUrls: []
};

const case5 = {
    title : "Medibib",
    url: "https://www.medibib.be/",
    image : medibibPreview,
    text : "An online pharmacist webshop.",
    conclusion : "Medibib is a start-up selling pharma online. They reached out to us to create their platform.",
    externalUrls: []
};

const case6 = {
    title : "Medibib App",
    url: "https://www.medibib.be/app/",
    image : medibibAPPreview,
    text : "-An app to scan your pharmaceuticals and get all the information about the product.",
    externalUrls: [
        {text: "This app got coverage in the Belgian news",url : "https://www.youtube.com/watch?v=esyEyPgXABM&index=6&list=PL2u_9d3Wos_qxXvqIm8kBGsPtxd79m61i"},
        {text:"This app got coverage on the Belgian radio", url: 'https://www.youtube.com/watch?v=LQhJ7C70ytU&index=7&list=PL2u_9d3Wos_qxXvqIm8kBGsPtxd79m61i'}],
    conclusion : "To make promotion for their platform, they gave us the assignment to create this app."
};

const case7 = {
    title : "Cryosauna",
    url: "http://www.cryosaunacenter.com/",
    image : cryoPreview,
    text : "Cryosauna center is a start-up offering an ice cold sauna experience. This website allows visitors to gain more information and to book their chilly sauna experience.",
    externalUrls: [],
    conclusion : "We just couldn't say no to this cool project."
};

const case8 = {
    title : "Myosotis",
    url: "http://www.myosotis.be/",
    image : myosotisPreview,
    text : "Myosotis is a big florist. Although he sold much in his store and trough phone, he didn't got much online sales. He asked us te remake the website and improve his conversion rate.",
    externalUrls: [],
    conclusion : "His conversion rate went up the moment our website went online!"
};

const case9 = {
    title : "Bluebear",
    url: "https://www.bluebear.be/",
    image : bluebearPreview,
    text : "Bluebear is a start-up on getting activities to the people. Their platform allows everyone to book activities in their vicinity. They had a huge problem. Activity  providers use different ways to manage their bookings." +
    "They needed to link their platform to different calendar platforms.",
    externalUrls: [],
    conclusion : "We build a modular solution for them to link their platform to Google Calendar & Checkfront. With an easy way to add extra providers"
};

class Cases extends Component {
    render() {
        return (
            <div>
                <CasesHero/>
                <div className="casesBody">
                    <div className="featuredCases">
                        <FeaturedCase data={case1}/>
                        <FeaturedCase data={case2}/>
                    </div>
                </div>
                <div className="otherCases">
                    <OtherCase data={case3}/>
                    <OtherCase data={case4}/>
                    <OtherCase data={case5}/>
                    <OtherCase data={case6}/>
                    <OtherCase data={case7}/>
                    <OtherCase data={case8}/>
                    <OtherCase data={case9}/>
                </div>
            </div>
        )
    }
}

export default Cases

