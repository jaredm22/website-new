import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Transcript from "./Transcript";

const conversations = [
    {   
        conversationId: 0,
        name: "Jared Min",
        description: "",
        initials: "JM",
        clicked: true,
        numMessages: 3,
        lastSentMessageIndex: -1,
        messages: [
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "My name is Jared and I'm a software developer."},
            {sent: false, message: "I built this website as a place where people could come learn more about me. It mimics the Apple iMessage app in both (basic) functionality and look, so feel free to try and type a message."},
            // {sent: false, message: ""},
            // {sent: true, message: "This is a really cool website"}
        ]
    },
    {   
        conversationId: 1,
        name: "About Me",
        description: "Learn more about me!",
        initials: "JM",
        clicked: false,
        numMessages: 3,
        messages: [
            {sent: false, message: "Hey there, thanks for stopping by. What would you like to know about me."},
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "Hi! Welcome to my website."}
        ]
    },
    {   
        conversationId: 2,
        name: "Projects",
        description: "This is a fake description",
        initials: "JM",
        clicked: false,
        numMessages: 3,
        messages: [
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "Hi! Welcome to my website."}
        ]
    },
    {   
        conversationId: 3,
        name: "Contact Me",
        description: "This is a fake description",
        initials: "JM",
        clicked: false,
        numMessages: 3,
        messages: [
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "Hi! Welcome to my website."}
        ]
    }
]

function Messenger(props) {
    const [selected, setSelected] = useState(0)

    function handleSelect(selectedId) {
        setSelected(selectedId)
    }

    console.log(selected)

    return(
        <div className="messenger-container">
            <Sidebar onChildClick={handleSelect} conversations={conversations} selectedIndex={selected}/>
            <Transcript key={`transcript${"-" + selected}`} selectedTranscript={conversations[selected]}/>
        </div>
    )
} export default Messenger;