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
        numMessages: 4,
        lastSentMessageIndex: 3,
        messages: [
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: false, message: "Hi! Welcome to my website."},
            {sent: true, message: "This is a really cool website"}
        ]
    },
    {   
        conversationId: 1,
        name: "Jared Min",
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
        conversationId: 2,
        name: "Jared Min",
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
        name: "Jared Min",
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
    const [data, setData] = useState(null)

    function handleSelect(selectedId) {
        setSelected(selectedId)
    }

    function getData() {
        return axios.get("https://website-backend-new.herokuapp.com/conversations").then(res => res.data)
    }

    useEffect(() => {
        let mounted = true;
        getData()
            .then(items => {
                if(mounted) {
                    setData(items)
                }
        })
        return () => mounted = false;
    }, [])

    console.log(selected)
    console.log(data)

    return(
        <div className="messenger-container">
            <Sidebar onChildClick={handleSelect} conversations={conversations} selectedIndex={selected}/>


            <Transcript key={`transcript${"-" + selected}`} selectedTranscript={conversations[selected]}/>
        </div>
    )
} export default Messenger;