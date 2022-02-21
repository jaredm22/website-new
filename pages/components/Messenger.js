import { useState } from "react";
import Sidebar from "./Sidebar";
import Transcript from "./Transcript";

const conversations = [
    {   
        conversationId: 0,
        name: "Jared Min",
        description: "",
        initials: "JM",
        clicked: true,
        numMessages: 7,
        lastSentMessageIndex: 5,
        messages: [
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "My name is Jared and I'm a software developer."},
            {sent: false, message: "I built this website as a place where people could come learn more about me. It mimics the Apple iMessage app in both (basic) functionality and look, so feel free to try and type a message. Also, in lieu of the traditional macOS application buttons you can find links to my GitHub, LinkedIn, and 2022 Spotify playlist on the top left of the app."},
            {sent: true, message: "Very cool. Anything else I need to know about navigating the site?"},
            {sent: false, message: "Nope! If you are a macOS user than you should be pretty familiar with this site already. If not then kudos to you for not spending a gazillion on the new Macbook Pro. But the site basically functions like any other site, where each of the conversations essentially equates to a tab. So just click between the different tabs to learn about what you're looking for."},
            {sent: true, message: "Awesome! I'll check it out."},
            {sent: false, message: "Cool beans."}
        ]
    },
    {   
        conversationId: 1,
        name: "About Me",
        description: "Learn more about me!",
        initials: "AM",
        clicked: false,
        numMessages: 7,
        lastSentMessageIndex: 5,
        messages: [
            {sent: false, message: "Hey there, thanks for stopping by. What would you like to know about me?"},
            {sent: true, message: "Where are you from?"},
            {sent: false, message: "I'm originally from Pennsylvania, but I've been in the Boston area ever since I started attending Boston University in 2017."},
            {sent: true, message: "Nice! What are your hobbies?"},
            {sent: false, message: "I'm really into sports (mainly basketball, football, and baseball) and used to play baseball before I started attending college. My teams are the Sixers, Eagles, and Phillies, and unfortunately most of those teams seem to be stuck in some sort purgatory at the moment. I'm also quite into music, and although I don't play as much as I should I am known to dabble on the guitar. And sometimes when I'm really feeling fancy I play the one song I know on the piano, River Flows in You."},
            {sent: true, message: "Very cool Jared. Well not really, but because I'm writing all of the messages on the site I'll say it is."},
            {sent: false, message: "Well thanks Jared, always glad you have my back."}
        ]
    },
    {   
        conversationId: 2,
        name: "About This Website",
        description: "Learn a bit about this site",
        initials: "AW",
        clicked: false,
        numMessages: 6,
        lastSentMessageIndex: 4,
        messages: [
            {sent: false, message: "Thanks again for stopping by. What would you like to know about the site?"},
            {sent: true, message: "What was the inspiration behind the design?"},
            {sent: false, message: "I've always appreciated the design of Apple products, and when I first started to learn how to code my very first idea for a personal project was to build an iMessage-like app where I could talk about myself in almost a conversation-like manner (I've been told I'm a good texter). I did succeed in building what I envisioned, just a lot uglier than I wanted. So thankfully I've burned the source code for that. The second iteration of my website was one that mimicked not only iMessage but other macOS apps like Spotify as well (https://jaredmin.netlify.app/). Unfortunately, trying to turn a desktop clone into a mobile app wasn't as easy as I envisioned so I had to scrap that too. The link is above though if you'd like to check that out."},
            {sent: false, message: "As I've gotten better at programming my personal goal has always been to get to the point where I could build the iMessage personal site that I've always wanted. And this is that site. So I hope you like it!"},
            {sent: true, message: "That's really neat. What did you use to build the site?"},
            {sent: false, message: "I built the site using ReactJS and a lot of elbow grease."},
        ]
    },
    {   
        conversationId: 3,
        name: "Projects",
        description: "Check out my projects!",
        initials: "P",
        clicked: false,
        numMessages: 10,
        lastSentMessageIndex: -1,
        messages: [
            // {sent: false, message: "RPOD Tracker", image: "RPOD"},
            {sent: false, message: "RPOD Tracker"},
            {sent: false, message: "This is an app I made for my friends. An RPOD is a random player of the day, which is any player from any sport that we deem to be 'random'. What exactly does it mean to be random? We're not sure. Which is the purpose of this app. To vote on players and try and find what players we think are random, then eventually do some data analysis and figure out the numbers behind a 'random' player. Will that actually happen? Not sure. But the app is fun."},
            {sent: false, message: "The app was built using ReactJS, with a backend built using ExpressJS, and MongoDB."},
            {sent: false, link: "RPOD"},
            // {sent: false, message: "Pixel Drawing Board", image: "pixel"},
            {sent: false, message: "Pixel Drawing Board"},
            {sent: false, message: "I don't really remember why I decided to build this, but alas it is built. It is a pixel art drawing board and it's quite fun to mess around with. Not mobile-friendly unfortunately. This app was also built using ReactJS (you're probably noticing a theme)."},    
            {sent: false, link: "pixel"},
            {sent: false, message: "Old Website"},
            {sent: false, message: "This is my old website that I mention in the About this Website section. It's not mobile friendly and I'm not necessarily totally satisfied with how it works, but it's still pretty fun to play with because the apps act how they would on a real desktop so feel free to check it out."},    
            {sent: false, link: "oldwebsite"},
        ]
    },
    {   
        conversationId: 4,
        name: "Contact Me",
        description: "In case you'd like to reach out",
        initials: "CM",
        clicked: false,
        numMessages: 1,
        lastSentMessageIndex: -1,
        messages: [
            {sent: false, message: "If you'd like to contact me, my email is jkymin2@gmail.com. You can also reach out to me via LinkedIn by clicking the orange button in the top left corner."},
        ]
    }
]

function Messenger(props) {
    const [selected, setSelected] = useState(0)

    function handleSelect(selectedId) {
        setSelected(selectedId)
    }

    console.log(selected)
    console.log(conversations)

    return(
        <div className="messenger-container">
            <Sidebar onChildClick={handleSelect} conversations={conversations} selectedIndex={selected}/>
            <Transcript key={`transcript${"-" + selected}`} selectedTranscript={conversations[selected]}/>
        </div>
    )
} export default Messenger;