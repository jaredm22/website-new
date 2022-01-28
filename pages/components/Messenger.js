import axios from "axios";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

const conversations = [
    {   
        conversationId: 0,
        name: "Jared Min",
        description: "",
        initials: "JM",
        clicked: true
    },
    {   
        conversationId: 1,
        name: "Jared Min",
        description: "This is a fake description",
        initials: "JM",
        clicked: false
    },
    {   
        conversationId: 2,
        name: "Jared Min",
        description: "This is a fake description",
        initials: "JM",
        clicked: false
    },
    {   
        conversationId: 3,
        name: "Jared Min",
        description: "This is a fake description",
        initials: "JM",
        clicked: false
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

            <div className="conversations-area">
                {selected}
            </div>
        </div>
    )
} export default Messenger;