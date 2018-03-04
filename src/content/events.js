const event1 = {
    title: "bla",
    date: new Date('2018-03-05'),
    link: "http://www.rans.be",
    content: "bla der blabla"
};

const event2 = {
    title: "Let's Talk Tech & Startups #5",
    date: new Date('2018-02-22'),
    link: "https://www.facebook.com/events/201786187069207/",
    content: "Let's talk Tech & Startups no. 5 is here!\n" +
    "You are invited to come and discuss about Tech & Startups in a casual way"
};

function initializeEvents() {
    let events =[];
    events.push(event1);
    events.push(event2);


    return events;
}

export default initializeEvents();
